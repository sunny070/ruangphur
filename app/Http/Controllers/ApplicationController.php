<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\Information;
use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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

    public function downloads()
    {

        $informations = Information::all()->map(function ($info) {
            return [
                'id' => $info->id,
                'title' => $info->title,
                'sub_title' => $info->sub_title,
                'file_url' => $info->attachment,
                'created_at' => $info->created_at->format('Y-m-d H:i:s'),
            ];
        });
    
        return Inertia::render('Download', ['informations' => $informations]);
    }
}
