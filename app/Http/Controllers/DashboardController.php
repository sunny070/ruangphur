<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\District;
use App\Models\Note;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Fetch all districts
        $districts = District::all();

        // Initialize arrays for chart data
        $labels = [];
        $pendingData = [];
        $approvedData = [];

        // Loop through each district to get application counts
        foreach ($districts as $district) {
            $labels[] = $district->name; // Add district name to labels

            // Count pending applications for the district
            $pendingCount = Application::whereHas('deceased', function ($query) use ($district) {
                $query->where('district_id', $district->id);
            })->where('status', 'Pending')->count();

            $pendingData[] = $pendingCount; // Add pending count to pendingData

            // Count approved applications for the district
            $approvedCount = Application::whereHas('deceased', function ($query) use ($district) {
                $query->where('district_id', $district->id);
            })->where('status', 'Approved')->count();

            $approvedData[] = $approvedCount; // Add approved count to approvedData
        }

        // Prepare chart data
        $chartData = [
            'labels' => $labels,
            'pendingData' => $pendingData,
            'approvedData' => $approvedData,
        ];

        // Other data for the dashboard
        $statusCounts = [
            'Incoming' => Application::where('status', 'Pending')->count(),
            'Approved' => Application::where('status', 'Approved')->count(),
            'Rejected' => Application::where('status', 'Rejected')->count(),
            'Pending' => Application::where('status', 'Pending')->count(),
            'Total' => Application::where('status', 'Completed')->count(),
        ];

        $topApplicants = Application::with('applicant')
            ->selectRaw('applicant_id, count(*) as count')
            ->groupBy('applicant_id')
            ->orderBy('count', 'desc')
            ->limit(10)
            ->get()
            ->map(function ($app) {
                return [
                    'name' => $app->applicant->name,
                    'count' => $app->count,
                ];
            });

        // return Inertia::render('Dashboard', [
        //     // ... other data ...
        //     'chartData' => $chartData,
        //     'mitthiRecordChartData' => [ // If you want a separate structure
        //         'labels' => $labels,
        //         'data' => $pendingData,
        //     ],
        // ]);

        $totalDisbursed = Application::with('transport')
            ->where('status', 'Approved')
            ->get()
            ->sum(fn($app) => $app->transport?->transport_cost ?? 0);

        // Monthly Disbursement Data
        $monthlyDisbursements = Application::where('status', 'Approved')
            ->join('transports', 'applications.transport_id', '=', 'transports.id')
            ->selectRaw('
        MONTH(applications.created_at) as month, 
        COALESCE(SUM(transports.transport_cost), 0) as total
    ')
            ->groupBy('month')
            ->orderBy('month')
            ->get()
            ->keyBy('month');

        // Create data for all months (January-December)
        $months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];

        $amountDisbursedData = [];
        foreach (range(1, 12) as $month) {
            $amountDisbursedData[] = $monthlyDisbursements->has($month)
                ? (float) $monthlyDisbursements[$month]->total
                : 0;
        }
        return Inertia::render('Dashboard', [
            'applications' => Application::with(['applicant', 'deceased.district', 'transport'])->get(),
            'statusCounts' => $statusCounts,
            'topApplicants' => $topApplicants,
            'chartData' => $chartData,
            'mitthiRecordChartData' => [ // If you want a separate structure
                'labels' => $labels,
                'data' => $pendingData,
            ],
            'totalDisbursed' => $totalDisbursed,
            'amountDisbursedData' => $amountDisbursedData,
            'months' => $months,
        ]);
    }

    public function note()
{
    return Inertia::render('Admin/Note/Index', [
        'notes' => Note::with('user')
            ->latest()
            ->paginate(10)
    ]);
}
public function create()
{
    return Inertia::render('Admin/Note/Create');
}

public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'content' => 'required|string',
        'status' => 'required|in:draft,published,archived',
    ]);

    // Add authenticated user ID
    $validated['user_id'] = auth()->id();

    Note::create($validated);

    return redirect()->route('note.index')
        ->with('success', 'Note created successfully');
}

public function update(Request $request, Note $note)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'content' => 'required|string',
        'status' => 'required|in:draft,published,archived',
    ]);

    $note->update($validated);

    return redirect()->back()
        ->with('success', 'Note updated successfully');
}

public function destroy(Note $note)
{
    $note->delete();
    return redirect()->back()
        ->with('success', 'Note deleted successfully');
}
}
