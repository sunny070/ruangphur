<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplicationController extends Controller
{
    public function index()
    {
        return Inertia::render('Track/Index');
    }
    public function trackApplication($id)
{
    $application = Application::where('application_no', $id)
        ->with(['applicant'])
        ->first();

    if (!$application) {
        return response()->json([
            'message' => 'Application not found.'
        ], 404);
    }

    // Define dynamic steps based on application status
    $statusMapping = [
        'pending' => [
            'title' => 'Pending',
            'description' => 'Your application is pending verification.',
            'timestamp' => optional($application->created_at)->format('Y-m-d H:i:s'),
            'completed' => false,
        ],
        'verified' => [
            'title' => 'Verified',
            'description' => 'The application has been verified by the district authority.',
            'timestamp' => optional($application->verified_at)->format('Y-m-d H:i:s'),
            'completed' => true,
        ],
        'processing' => [
            'title' => 'Application under process',
            'description' => 'The application is being processed at the directorate level.',
            'timestamp' => optional($application->processing_at)->format('Y-m-d H:i:s'),
            'completed' => true,
        ],
        'approved' => [
            'title' => 'Bill Process',
            'description' => 'The application has been processed for payment at the bank.',
            'timestamp' => optional($application->processed_at)->format('Y-m-d H:i:s'),
            'completed' => true,
        ],
    ];

    // Prepare the response
    $response = [
        'amount' => $application->transport?->transport_cost ?? 'N/A',
        'status' => $application->status,
        'appliedDate' => optional($application->created_at)->format('Y-m-d H:i:s'),
        'dilnaId' => $application->application_no,
        'steps' => [
            [
                'title' => 'Form Submitted',
                'description' => 'Application successfully submitted.',
                'timestamp' => optional($application->created_at)->format('Y-m-d H:i:s'),
                'completed' => true,
            ],
            $statusMapping[$application->status] ?? [
                'title' => 'Unknown Status',
                'description' => 'The application has an unrecognized status.',
                'timestamp' => null,
                'completed' => false,
            ],
        ],
    ];

    return response()->json($response);
}


//     public function trackApplication($id)
// {
//     $application = Application::where('application_no', $id)
//         ->with(['applicant'])
//         ->first();

//     if (!$application) {
//         return response()->json([
//             'message' => 'Application not found.'
//         ], 404);
//     }

//     // Define dynamic steps based on application status
//     $statusMapping = [
//         'pending' => [
//             'title' => 'Pending',
//             'description' => 'Your application is pending verification.',
//             'timestamp' => optional($application->created_at)->format('Y-m-d H:i:s'),
//             'completed' => false,
//         ],
//         'verified' => [
//             'title' => 'Verified',
//             'description' => 'The application has been verified by the district authority.',
//             'timestamp' => optional($application->verified_at)->format('Y-m-d H:i:s'),
//             'completed' => true,
//         ],
//         'processing' => [
//             'title' => 'Application under process',
//             'description' => 'The application is being processed at the directorate level.',
//             'timestamp' => optional($application->processing_at)->format('Y-m-d H:i:s'),
//             'completed' => true,
//         ],
//         'approved' => [
//             'title' => 'Bill Process',
//             'description' => 'The application has been processed for payment at the bank.',
//             'timestamp' => optional($application->processed_at)->format('Y-m-d H:i:s'),
//             'completed' => true,
//         ],
//     ];

//     // Prepare the response
//     $response = [
//         'amount' => $application->transport?->transport_cost ?? 'N/A',
//         'status' => $application->status,
//         'appliedDate' => optional($application->created_at)->format('Y-m-d H:i:s'),
//         'dilnaId' => $application->application_no,
//         'steps' => [
//             [
//                 'title' => 'Form Submitted',
//                 'description' => 'Application successfully submitted.',
//                 'timestamp' => optional($application->created_at)->format('Y-m-d H:i:s'),
//                 'completed' => true,
//             ],
//             $statusMapping[$application->status] ?? [
//                 'title' => 'Unknown Status',
//                 'description' => 'The application has an unrecognized status.',
//                 'timestamp' => null,
//                 'completed' => false,
//             ],
//         ],
//     ];

//     return response()->json($response);
// }


}
