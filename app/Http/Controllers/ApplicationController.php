<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\Note;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplicationController extends Controller
{

    public function index()
    {
        return Inertia::render('Track/Index');
    }


    public function view($id)
    {
        $application = Application::where('application_no', $id)
            ->with([
                'applicant.district',
                'deceased.district',
                'deceased.constituency',
                'transport.sourceDistrict', // Eager load source district relation
                'transport.destinationDistrict', // Eager load destination district relation
                'attachment'

                ])
            ->first();
            // dd($application);

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

    public function faqs()
{
    return Inertia::render('Faqs', [
        'faqs' => Note::where('status', 'published')
            ->orderBy('created_at', 'desc')
            ->get()
    ]);
}

    public function download()
    {
        return Inertia::render('Download');
    }
}
