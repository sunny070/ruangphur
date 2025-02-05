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

            $statusCounts = [
                'Incoming' => Application::where('status', 'Pending')->count(),
                'Approved' => Application::where('status', 'Approved')->count(),
                'Rejected' => Application::where('status', 'Rejected')->count(),
                'Pending' => Application::where('status', 'Pending')->count(), // Adjust if needed
                'Completed' => Application::where('status', 'Completed')->count(),
            ];
        return Inertia::render('Admin/Application', [
            'applications' => $applications,
            'statusCounts' => $statusCounts, 
            'flash' => [
                'success' => session('success'),
                'error' => session('error')
            ]
        ]);
    }
    public function bill()
    {
        $applications = Application::with(['applicant', 'deceased.district', 'transport']) // Eager load related models
           ->where('status','Approved')
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



public function update(Request $request, $id)
{
    // Find the application record
    $application = Application::find($id);

    if (!$application) {
        return response()->json(['message' => 'Application not found'], 404);
    }

    // Validate request
    $validatedData = $request->validate([
        'status' => 'required|string',
        'application_no' => 'required|string',
        'verified_at' => 'nullable|date',
        'approved_at' => 'nullable|date',
        'processed_at' => 'nullable|date',

        // Applicant fields
        'applicant.name' => 'required|string',
        'applicant.mobile' => 'required|string',
        'applicant.district' => 'required|string',
        'applicant.locality' => 'nullable|string',
        'applicant.bank_name' => 'nullable|string',
        'applicant.account_no' => 'nullable|string',
        'applicant.ifsc_code' => 'nullable|string',

        // Deceased fields
        'deceased.name' => 'required|string',
        'deceased.relative' => 'required|string',
        'deceased.relative_name' => 'required|string',
        'deceased.dob' => 'required|date',
        'deceased.gender' => 'required|string',
        'deceased.locality' => 'nullable|string',
        'deceased.constituency' => 'nullable|string',
        'deceased.time_of_death' => 'nullable|string',
        'deceased.place_of_death' => 'nullable|string',

        // Transport fields
        'transport.source_district' => 'nullable|string',
        'transport.source_locality' => 'nullable|string',
        'transport.destination_district' => 'nullable|string',
        'transport.destination_locality' => 'nullable|string',
        'transport.vehicle_number' => 'nullable|string',
        'transport.driver_name' => 'nullable|string',
        'transport.driver_phone' => 'nullable|string',
        'transport.transport_cost' => 'nullable|numeric',
    ]);

    // Update the main application
    $application->update([
        'status' => $request->status,
        'application_no' => $request->application_no,
        'verified_at' => $request->verified_at,
        'approved_at' => $request->approved_at,
        'processed_at' => $request->processed_at,
    ]);

    // Update the related Applicant
    if ($application->applicant) {
        $application->applicant->update([
            'name' => $request->input('applicant.name'),
            'mobile' => $request->input('applicant.mobile'),
            'district' => $request->input('applicant.district'),
            'locality' => $request->input('applicant.locality'),
            'bank_name' => $request->input('applicant.bank_name'),
            'account_no' => $request->input('applicant.account_no'),
            'ifsc_code' => $request->input('applicant.ifsc_code'),
        ]);
    }

    // Update the Deceased record
    if ($application->deceased) {
        $application->deceased->update([
            'name' => $request->input('deceased.name'),
            'relative' => $request->input('deceased.relative'),
            'relative_name' => $request->input('deceased.relative_name'),
            'dob' => $request->input('deceased.dob'),
            'gender' => $request->input('deceased.gender'),
            'locality' => $request->input('deceased.locality'),
            'constituency' => $request->input('deceased.constituency'),
            'time_of_death' => $request->input('deceased.time_of_death'),
            'place_of_death' => $request->input('deceased.place_of_death'),
        ]);
    }

    // Update the Transport record
    if ($application->transport) {
        $application->transport->update([
            'source_district' => $request->input('transport.source_district'),
            'source_locality' => $request->input('transport.source_locality'),
            'destination_district' => $request->input('transport.destination_district'),
            'destination_locality' => $request->input('transport.destination_locality'),
            'vehicle_number' => $request->input('transport.vehicle_number'),
            'driver_name' => $request->input('transport.driver_name'),
            'driver_phone' => $request->input('transport.driver_phone'),
            'transport_cost' => $request->input('transport.transport_cost'),
        ]);
    }

    return redirect()->route('admin.application')->with('success', 'Application updated successfully.');
}
public function destroy(Application $application)
{
    // Delete related data (if needed)
    $application->deceased()->delete();
    $application->transport()->delete();

    // Delete the application
    $application->delete();

    return redirect()->route('admin.application')->with('success', 'Application deleted successfully.');
}





// public function update(Request $request, Application $application)
// {   dd($request->all());
//     $application->update($request->all());
//     return redirect()->route('admin.application')->with('success', 'Application updated successfully.');
// }
// public function update(Request $request, Application $application)
// {
//     $validated = $request->all()->validate([
//         'status' => 'required|string',
//         // Add other fields as needed
//     ]);

//     $application->update($validated);

//     return redirect()->route('admin.applications')->with('success', 'Application updated successfully.');
// }
}



