<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\District;
use App\Models\Information;
use App\Models\Note;
// use Illuminate\Container\Attributes\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
            })->where('status', 'Processed')->count();

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
            ->where('status', 'Processed')
            ->get()
            ->sum(fn($app) => $app->transport?->transport_cost ?? 0);

        // Monthly Disbursement Data
        $monthlyDisbursements = Application::where('status', 'Processed')
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
        $query = Note::latest();

        if (request()->has('search')) {
            $search = request('search');
            $query->where('title', 'like', "%{$search}%")
                ->orWhere('content', 'like', "%{$search}%");
        }

        return Inertia::render('Admin/Note/Index', [
            'notes' => $query->paginate(10)->withQueryString(),
            'filters' => request()->only('search'),
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



    public function createInfo()
    {
        return Inertia::render('Admin/Information/Create');
    }

    public function storeInfo(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'sub_title' => 'required',
            'file' => 'required|file|mimes:pdf,jpg,png|max:2048',
        ]);
        $file = $request->file('file');
        $path = $file->storeAs('uploads',$file->hashName(),'public');
        // $path = $request->file('file')->store('uploads', 'public');
        // dd([
        //     'stored_path' => $path,
        //     'full_path' => storage_path('app/public/'.$path),
        //     'public_url' => asset('storage/'.$path)
        // ]);
        Information::create([
            'title' => $request->title,
            'sub_title' => $request->sub_title,
            'attachment' => $path,
        ]);

        return redirect()->route('admin.info.index')->with('success', 'File uploaded successfully.');
    }

    public function info()
    {
        $informations = Information::all()->map(function ($info) {
            return [
                'id' => $info->id,
                'title' => $info->title,  // Include title
                'sub_title' => $info->sub_title,  // Include sub_title
                'file_url' => $info->attachment,
                'created_at' => $info->created_at->format('Y-m-d H:i:s'),
            ];
        });
        // dd($informations);
        return Inertia::render('Admin/Information/Index', ['informations' => $informations]);
    }

    public function updateInfo(Request $request, Information $info)
    {
        $request->validate([
            'file' => 'required|file|mimes:pdf,jpg,png|max:2048'
        ]);

        if ($info->attachment) {
            Storage::disk('public')->delete($info->attachment);
        }

        $path = $request->file('file')->store('uploads', 'public');
        $info->update(['attachment' => $path]);

        return redirect()->route('admin.info.index')->with('success', 'File updated successfully.');
    }

    public function destroyInfo(Information $info)
    {
        if ($info->attachment) {
            Storage::disk('public')->delete($info->attachment);
        }
        $info->delete();

        return redirect()->route('admin.info.index')->with('success', 'File deleted successfully.');
    }
}
