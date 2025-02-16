<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\District;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VerifierController extends Controller

{
    public function dashboard()
{
    // Fetch the districts associated with the authenticated user
    $userDistricts = auth()->user()->districts()->get();

    // Get applications based on the user's districts
    $applications = Application::with(['applicant', 'deceased.district', 'transport'])
        ->whereIn('status', ['Pending', 'Verified', 'Rejected'])
        ->whereHas('deceased', function ($query) use ($userDistricts) {
            $query->whereIn('district_id', $userDistricts->pluck('id'));
        })
        ->get();

    // Count applications by status filtered by the user's districts
    $statusCounts = [
        'Incoming' => Application::where('status', 'Pending')
            ->whereHas('deceased', function ($query) use ($userDistricts) {
                $query->whereIn('district_id', $userDistricts->pluck('id'));
            })
            ->count(),
        'Verified' => Application::where('status', 'Verified')
            ->whereHas('deceased', function ($query) use ($userDistricts) {
                $query->whereIn('district_id', $userDistricts->pluck('id'));
            })
            ->count(),
        'Rejected' => Application::where('status', 'Rejected')
            ->whereHas('deceased', function ($query) use ($userDistricts) {
                $query->whereIn('district_id', $userDistricts->pluck('id'));
            })
            ->count(),
        'Pending' => Application::where('status', 'Pending')
            ->whereHas('deceased', function ($query) use ($userDistricts) {
                $query->whereIn('district_id', $userDistricts->pluck('id'));
            })
            ->count(),
    ];

    // Initialize arrays for chart data
    $labels = [];
    $pendingData = [];
    $verifiedData = [];

    // Loop through each district to get application counts
    foreach ($userDistricts as $district) {
        $labels[] = $district->name; // Add district name to labels

        // Count pending applications for the district
        $pendingCount = Application::whereHas('deceased', function ($query) use ($district) {
            $query->where('district_id', $district->id);
        })->where('status', 'Pending')->count();

        $pendingData[] = $pendingCount; // Add pending count to pendingData

        // Count verified applications for the district
        $verifiedCount = Application::whereHas('deceased', function ($query) use ($district) {
            $query->where('district_id', $district->id);
        })->where('status', 'Verified')->count();

        $verifiedData[] = $verifiedCount; // Add verified count to verifiedData
    }

    // Prepare chart data
    $chartData = [
        'labels' => $labels,
        'pendingData' => $pendingData,
        'verifiedData' => $verifiedData,
    ];

    // Top Applicants
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

    // Total Disbursed
    $totalDisbursed = Application::with('transport')
        ->where('status', 'Verified')
        ->get()
        ->sum(fn($app) => $app->transport?->transport_cost ?? 0);

    // Monthly Disbursement Data
    $monthlyDisbursements = Application::where('status', 'Verified')
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
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    $amountDisbursedData = [];
    foreach (range(1, 12) as $month) {
        $amountDisbursedData[] = $monthlyDisbursements->has($month)
            ? (float) $monthlyDisbursements[$month]->total
            : 0;
    }

    return Inertia::render('Verifier/VerifierDashboard', [
        'applications' => $applications,
        'statusCounts' => $statusCounts,
        'topApplicants' => $topApplicants,
        'chartData' => $chartData,
        'mitthiRecordChartData' => [
            'labels' => $labels,
            'data' => $pendingData,
        ],
        'totalDisbursed' => $totalDisbursed,
        'amountDisbursedData' => $amountDisbursedData,
        'months' => $months,
    ]);
}

//     public function dashboard()
// {
//     // Fetch all districts
//     $districts = District::all();

//     // Initialize arrays for chart data
//     $labels = [];
//     $pendingData = [];
//     $verifiedData = [];

//     // Loop through each district to get application counts
//     foreach ($districts as $district) {
//         $labels[] = $district->name; // Add district name to labels

//         // Count pending applications for the district
//         $pendingCount = Application::whereHas('deceased', function ($query) use ($district) {
//             $query->where('district_id', $district->id);
//         })->where('status', 'Pending')->count();

//         $pendingData[] = $pendingCount; // Add pending count to pendingData

//         // Count verified applications for the district
//         $verifiedCount = Application::whereHas('deceased', function ($query) use ($district) {
//             $query->where('district_id', $district->id);
//         })->where('status', 'Verified')->count();

//         $verifiedData[] = $verifiedCount; // Add verified count to verifiedData
//     }

//     // Prepare chart data
//     $chartData = [
//         'labels' => $labels,
//         'pendingData' => $pendingData,
//         'verifiedData' => $verifiedData,
//     ];
//     $userDistrictIds = auth()->user()->districts()->pluck('district_id');
//      $applications = Application::with(['applicant', 'deceased.district', 'transport'])
//         ->whereIn('status', ['Pending', 'Verified','Rejected'])
//         ->whereHas('deceased', function ($query) use ($userDistrictIds) {
//             $query->whereIn('district_id', $userDistrictIds);
//         })
//         ->get();

//     // Other data for the dashboard
//     $statusCounts = [
//         'Incoming' => Application::where('status', 'Pending')
//             ->whereHas('deceased', function ($query) use ($userDistrictIds) {
//                 $query->whereIn('district_id', $userDistrictIds);
//             })
//             ->count(),
//         'Verified' => Application::where('status', 'Verified')
//             ->whereHas('deceased', function ($query) use ($userDistrictIds) {
//                 $query->whereIn('district_id', $userDistrictIds);
//             })
//             ->count(),
//         'Rejected' => Application::where('status', 'Rejected')
//             ->whereHas('deceased', function ($query) use ($userDistrictIds) {
//                 $query->whereIn('district_id', $userDistrictIds);
//             })
//             ->count(),
//         'Pending' => Application::where('status', 'Pending') // Adjust if needed    
//             ->whereHas('deceased', function ($query) use ($userDistrictIds) {
//                 $query->whereIn('district_id', $userDistrictIds);
//             })
//             ->count(),
//     ];


//     $topApplicants = Application::with('applicant')
//         ->selectRaw('applicant_id, count(*) as count')
//         ->groupBy('applicant_id')
//         ->orderBy('count', 'desc')
//         ->limit(10)
//         ->get()
//         ->map(function ($app) {
//             return [
//                 'name' => $app->applicant->name,
//                 'count' => $app->count,
//             ];
//         });

//     $totalDisbursed = Application::with('transport')
//         ->where('status', 'Verified')
//         ->get()
//         ->sum(fn($app) => $app->transport?->transport_cost ?? 0);

//     // Monthly Disbursement Data
//     $monthlyDisbursements = Application::where('status', 'Verified')
//         ->join('transports', 'applications.transport_id', '=', 'transports.id')
//         ->selectRaw('
//             MONTH(applications.created_at) as month, 
//             COALESCE(SUM(transports.transport_cost), 0) as total
//         ')
//         ->groupBy('month')
//         ->orderBy('month')
//         ->get()
//         ->keyBy('month');

//     // Create data for all months (January-December)
//     $months = [
//         'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//     ];

//     $amountDisbursedData = [];
//     foreach (range(1, 12) as $month) {
//         $amountDisbursedData[] = $monthlyDisbursements->has($month)
//             ? (float) $monthlyDisbursements[$month]->total
//             : 0;
//     }

//     return Inertia::render('Verifier/VerifierDashboard', [
//         'applications' => Application::with(['applicant', 'deceased.district', 'transport'])
//             ->whereIn('status', ['Pending', 'Verified'])
//             ->get(),
//         'statusCounts' => $statusCounts,
//         'topApplicants' => $topApplicants,
//         'chartData' => $chartData,
//         'mitthiRecordChartData' => [ // If you want a separate structure
//             'labels' => $labels,
//             'data' => $pendingData,
//         ],
//         'totalDisbursed' => $totalDisbursed,
//         'amountDisbursedData' => $amountDisbursedData,
//         'months' => $months,
//     ]);
// }
   

    public function index()
{
    $userDistrictIds = auth()->user()->districts()->pluck('district_id');

    // Get applications based on the user's districts
    $applications = Application::with(['applicant', 'deceased.district', 'transport'])
        ->whereIn('status', ['Pending', 'Verified','Rejected'])
        ->whereHas('deceased', function ($query) use ($userDistrictIds) {
            $query->whereIn('district_id', $userDistrictIds);
        })
        ->get();

    // Count applications by status filtered by the user's districts
    $statusCounts = [
        'Incoming' => Application::where('status', 'Pending')
            ->whereHas('deceased', function ($query) use ($userDistrictIds) {
                $query->whereIn('district_id', $userDistrictIds);
            })
            ->count(),
        'Verified' => Application::where('status', 'Verified')
            ->whereHas('deceased', function ($query) use ($userDistrictIds) {
                $query->whereIn('district_id', $userDistrictIds);
            })
            ->count(),
        'Rejected' => Application::where('status', 'Rejected')
            ->whereHas('deceased', function ($query) use ($userDistrictIds) {
                $query->whereIn('district_id', $userDistrictIds);
            })
            ->count(),
        'Pending' => Application::where('status', 'Pending') // Adjust if needed    
            ->whereHas('deceased', function ($query) use ($userDistrictIds) {
                $query->whereIn('district_id', $userDistrictIds);
            })
            ->count(),
    ];

    return Inertia::render('Verifier/Application', [
        'applications' => $applications,
        'statusCounts' => $statusCounts,
        'flash' => [
            'success' => session('success'),
            'error' => session('error')
        ]
    ]);
}

    public function verify(Application $application)
    {
        if ($application && $application->status === 'Pending') {
            $application->status = 'Verified'; // Change the status to 'Verified'
            $application->verified_at = now(); // Set the verified_at timestamp
            $application->save();

            return redirect()->route('verifier.application')->with('success', 'Application verified.');
        }

        return redirect()->route('verifier.application')->with('error', 'Application is already processed or invalid.');
    }
    // public function verifyAll(Request $request)
    // {
    //     $ids = $request->input('ids');

    //     if (empty($ids)) {
    //         return redirect()->back()->with('error', 'No applications selected.');
    //     }

    //     // Update the status of all selected applications to 'Approved'
    //     Application::whereIn('id', $ids)->update(['status' => 'Verified', 'verified_at' => now()]);

    //     return redirect()->back()->with('success', 'Selected applications have been approved.');
    // }

    public function verifyAll(Request $request)
{
    $ids = $request->input('ids');

    if (empty($ids)) {
        return redirect()->back()->with('error', 'No applications selected.');
    }

    // Only update applications that are in 'Pending' state
    Application::whereIn('id', $ids)
        ->where('status', 'Pending')
        ->update(['status' => 'Verified', 'verified_at' => now()]);

    return redirect()->back()->with('success', 'Pending applications have been verified.');
}
    public function reject(Application $application)
    {
        if ($application && $application->status === 'Pending') {
            $application->status = 'Rejected'; // Change the status to 'Rejected'
            $application->save();

            return redirect()->route('verifier.application')->with('success', 'Application rejected.');
        }

        return redirect()->route('verifier.application')->with('error', 'Application is already processed or invalid.');
    }


    // public function rejectAll(Request $request)
    // {
    //     $ids = $request->input('ids');

    //     if (empty($ids)) {
    //         return redirect()->back()->with('error', 'No applications selected.');
    //     }

    //     // Update the status of all selected applications to 'Rejected'
    //     Application::whereIn('id', $ids)->update(['status' => 'Rejected']);

    //     return redirect()->back()->with('success', 'Selected applications have been rejected.');
    // }

    public function rejectAll(Request $request)
{
    $ids = $request->input('ids');

    if (empty($ids)) {
        return redirect()->back()->with('error', 'No applications selected.');
    }

    // Only update applications that are in 'Pending' state
    Application::whereIn('id', $ids)
        ->where('status', 'Pending')
        ->update(['status' => 'Rejected']);

    return redirect()->back()->with('success', 'Pending applications have been rejected.');
}
    public function show(Application $application)
    {
        // Eager load related models to avoid N+1 query problem
        $application->load([
            'applicant.district',
            'deceased.district',
            'deceased.constituency',
            'deceased.relative',
            'transport.sourceDistrict', // Eager load source district relation
            'transport.destinationDistrict', // Eager load destination district relation
            'attachment'
        ]);

        // Log or dd the file URLs for debugging
        // dd($application->attachment->id_proof, $application->attachment->receipt, $application->attachment->death_certificate, $application->attachment->additional_document);

        return Inertia::render('Verifier/ApplicationDetails', [
            'application' => $application,
        ]);
    }
    
}
