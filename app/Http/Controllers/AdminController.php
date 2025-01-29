<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $applications = Application::with(['applicant', 'deceased.district', 'transport']) // Eager load related models
           
            ->get();

        return Inertia::render('Admin/Application', [
            'applications' => $applications,
            'flash' => [
                'success' => session('success'),
                'error' => session('error')
            ]
        ]);
    }
    public function bill()
    {
        $applications = Application::with(['applicant', 'deceased.district', 'transport']) // Eager load related models
           ->where('status','Payment')
            ->get();

        return Inertia::render('Admin/BillPayment', [
            'applications' => $applications,
            'flash' => [
                'success' => session('success'),
                'error' => session('error')
            ]
        ]);
    }

     //
     

    public function approve(Application $application)
    {
        if ($application && $application->status === 'Pending') {
            $application->status = 'Approved'; // Change the status to 'Approved'
            $application->approved_at = now(); // Set the approved_at timestamp
            $application->save();

            return redirect()->route('admin.application')->with('success', 'Application approved.');
        }

        return redirect()->route('admin.application')->with('error', 'Application is already processed or invalid.');
    }
    public function payme(Application $application)
    {
        if ($application && $application->status === 'Pending') {
            $application->status = 'Approved'; // Change the status to 'Approved'
            $application->approved_at = now(); // Set the approved_at timestamp
            $application->save();

            return redirect()->route('application')->with('success', 'Application approved.');
        }

        return redirect()->route('application')->with('error', 'Application is already processed or invalid.');
    }

    

    public function reject(Application $application)
    {
        if ($application && $application->status === 'Pending') {
            $application->status = 'Rejected'; // Change the status to 'Rejected'
            $application->save();

            return redirect()->route('application')->with('success', 'Application rejected.');
        }

        return redirect()->route('application')->with('error', 'Application is already processed or invalid.');
    }

    public function show(Application $application )
{
    // Eager load related models to avoid N+1 query problem
    return Inertia::render('Admin/ApplicationDetails', [
        'application' => $application->load(['applicant', 'deceased.district', 'transport']),
    ]);
}


public function edit(Application $application)
{
    return Inertia::render('Admin/EditApplication', [
        'application' => $application->load('applicant', 'deceased', 'transport'),
    ]);
}

public function update(Request $request, Application $application)
{
    $validated = $request->validate([
        'status' => 'required|string',
        // Add other fields as needed
    ]);

    $application->update($validated);

    return redirect()->route('admin.applications')->with('success', 'Application updated successfully.');
}

}
