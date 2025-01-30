<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $applications = Application::with(['applicant', 'deceased.district', 'transport'])
            ->get();
    
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
    
        // Data for the chart
        $chartData = [
            'labels' => ['Aizawi', 'Lunglei', 'Siana', 'Champhai', 'Kolasib', 'Serchhip', 'Lawngtiai', 'Mamit', 'Khawzawi', 'Saituai', 'Hnahthiai'],
            'pendingData' => [3897, 2500, 3000, 1500, 2000, 1000, 1200, 1800, 900, 1100, 1300], // Example pending data
            'approvedData' => [10000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1500, 1000, 500], // Example approved data
        ];
    
        return Inertia::render('Dashboard', [
            'applications' => $applications,
            'statusCounts' => $statusCounts,
            'topApplicants' => $topApplicants,
            'chartData' => $chartData, // Pass chart data to the frontend
        ]);
    }
}
