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
            'message' => 'Application not found.',
        ], 404);
    }

    // Define dynamic steps based on application status
    $statusMapping = [
        'Pending' => [
            'title' => 'Form Submitted',
            'description' => 'I ruang phurh dilna chu thehluah fel a ni tawh e, District lama thuneitu ten verify turin a thang mek.',
            'timestamp' => optional($application->created_at)->format('Y-m-d H:i:s'),
            'completed' => true,
        ],
        'Verified' => [
            'title' => 'Verified',
            'description' => 'District thuneitu te atangin verify a ni a, Directorate lamah thawn a ni.',
            'timestamp' => optional($application->verified_at)->format('Y-m-d H:i:s'),
            'completed' => true,
        ],
        'Approved' => [
            'title' => 'Application under process',
            'description' => 'Directorate kutah a awm mek a, bank lama deposit turin file tih kal a ni.',
            'timestamp' => optional($application->processing_at)->format('Y-m-d H:i:s'),
            'completed' => true,
        ],
        'Payment' => [
            'title' => 'Bill Process',
            'description' => 'I ruang phurh dilna chu bank lamah process mek a ni.',
            'timestamp' => optional($application->processed_at)->format('Y-m-d H:i:s'),
            'completed' => true,
        ],
    ];

    // Default step (form submission)
    $steps = [
        [
            'title' => 'Form Submitted',
            'description' => 'Application successfully submitted.',
            'timestamp' => optional($application->created_at)->format('Y-m-d H:i:s'),
            'completed' => true,
        ],
    ];

    // Add dynamic steps based on the application's status
    if (isset($statusMapping[$application->status])) {
        $steps[] = $statusMapping[$application->status];
    }

    // Prepare the response
    $response = [
        'amount' => $application->transport?->transport_cost ?? 'N/A',
        'status' => $application->status,
        'appliedDate' => optional($application->created_at)->format('Y-m-d H:i:s'),
        'dilnaId' => $application->application_no,
        'steps' => $steps,
    ];

    return response()->json($response);
}

}
