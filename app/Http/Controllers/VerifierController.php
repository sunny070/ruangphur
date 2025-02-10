<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VerifierController extends Controller
{
    public function index()
    {
        $applications = Application::with(['applicant', 'deceased.district', 'transport']) // Eager load related models
            ->where('status', 'Pending')
            ->get();

        $userDistrictIds = auth()->user()->districts()->pluck('district_id');
        $applications = Application::with(['applicant', 'deceased.district', 'transport'])
            ->where('status', 'Pending')
            ->whereHas('deceased', function ($query) use ($userDistrictIds) {
                $query->whereIn('district_id', $userDistrictIds);
            })

            ->get();


        // dd($applications);
        return Inertia::render('Verifier/Application', [
            'applications' => $applications,
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
}
