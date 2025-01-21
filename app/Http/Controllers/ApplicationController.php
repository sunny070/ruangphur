<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplicationController extends Controller
{
    // Show tracking page
    public function index()
    {
        return Inertia::render('Track/Index');
    }
    public function view($id)
{
    $application = Application::where('application_no', $id)
        ->with(['applicant', 'deceased', 'transport'])
        ->first();

    if (!$application) {
        return redirect()->back()->with('error', 'Application not found.');
    }

    return Inertia::render('Track/View', [
        'application' => $application,
    ]);
}


    // Fetch application details by ID
    public function trackApplication($id)
    {
        $application = Application::where('application_no', $id)
            ->with(['applicant', 'deceased', 'transport'])
            ->first();

        if (!$application) {
            return response()->json([
                'message' => 'Application not found.',
            ], 404);
        }

        return response()->json([
            'application' => $application,
        ]);
    }

    public function viewApplication($id)
    {
        $application = Application::where('application_no', $id)
        ->with(['applicant', 'deceased', 'transport'])
        ->first();

    if (!$application) {
        return response()->json([
            'message' => 'Application not found.',
        ], 404);
    }

    return response()->json([
        'application' => $application,
    ]);
    }

    public function faqs(){
        return Inertia::render('Faqs');
    }
}
