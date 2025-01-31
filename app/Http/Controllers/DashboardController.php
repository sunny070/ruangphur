<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\District;
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
                $query->where('district', $district->id);
            })->where('status', 'Pending')->count();

            $pendingData[] = $pendingCount; // Add pending count to pendingData

            // Count approved applications for the district
            $approvedCount = Application::whereHas('deceased', function ($query) use ($district) {
                $query->where('district', $district->id);
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
            'Completed' => Application::where('status', 'Completed')->count(),
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

        return Inertia::render('Dashboard', [
            'applications' => Application::with(['applicant', 'deceased.district', 'transport'])->get(),
            'statusCounts' => $statusCounts,
            'topApplicants' => $topApplicants,
            'chartData' => $chartData, // Pass chart data to the frontend
        ]);
    }
}
