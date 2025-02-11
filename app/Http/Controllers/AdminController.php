<?php

namespace App\Http\Controllers;

use App\Exports\AdminApplicationsExport;
use App\Models\Application;
use App\Models\Constituency;
use App\Models\District;
use App\Models\Relative;
use App\Exports\ApplicationsExport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $applications = Application::with([

            'applicant.district',
            'deceased.district',
            'deceased.constituency',
            'transport.sourceDistrict',
            'transport.destinationDistrict',
        ])->get();
        // dd($applications);
        // Fetch dropdown options
        $dropdowns = [
            'districts' => District::all(),
            'constituencies' => Constituency::all(),
            'relatives' => Relative::all(),
        ];

        $statusCounts = [
            'Incoming' => Application::where('status', 'Pending')->count(),
            'Approved' => Application::where('status', 'Approved')->count(),
            'Rejected' => Application::where('status', 'Rejected')->count(),
            'Pending' => Application::where('status', 'Pending')->count(), // Adjust if needed
            'Paid' => Application::where('status', 'Paid')->count(),
        ];
        return Inertia::render('Admin/Application', [
            'applications' => $applications,
            'statusCounts' => $statusCounts,
            'districts' => District::all(),
            'dropdowns' => $dropdowns,
            'flash' => [
                'success' => session('success'),
                'error' => session('error')
            ]
        ]);
    }
    public function bill()
    {
        // Fetch applications with the specified statuses
        $applications = Application::with(['applicant', 'deceased.district', 'transport'])
            ->whereIn('status', ['Approved', 'Paid', 'Rejected'])
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




    public function approveAll(Request $request)
    {
        $ids = $request->input('ids');

        if (empty($ids)) {
            return redirect()->back()->with('error', 'No applications selected.');
        }

        // Update the status of all selected applications to 'Approved'
        Application::whereIn('id', $ids)->update(['status' => 'Approved', 'approved_at' => now()]);

        return redirect()->back()->with('success', 'Selected applications have been approved.');
    }








    public function paymet(Application $application)
    {
        if ($application && $application->status === 'Approved') {
            $application->status = 'Paid'; // Change the status to 'Approved'
            $application->processed_at = now(); // Set the approved_at timestamp
            $application->save();

            return redirect()->route('application')->with('success', 'Application approved.');
        }

        return redirect()->route('application')->with('error', 'Application is already processed or invalid.');
    }


    public function paymetAll(Request $request)
    {
        $ids = $request->input('ids');

        if (empty($ids)) {
            return redirect()->back()->with('error', 'No applications selected.');
        }

        Application::whereIn('id', $ids)
            ->where('status', 'Approved') // Only process approved applications
            ->update([
                'status' => 'Paid',
                'processed_at' => now()
            ]);

        return redirect()->back()->with('success', 'Selected payments processed successfully.');
    }




    public function rejectAllBill(Request $request)
    {
        $ids = $request->input('ids');

        if (empty($ids)) {
            return redirect()->back()->with('error', 'No applications selected.');
        }

        Application::whereIn('id', $ids)
            ->update(['status' => 'Rejected']);

        return redirect()->back()->with('success', 'Selected applications rejected successfully.');
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

    public function rejectAll(Request $request)
    {
        $ids = $request->input('ids');

        if (empty($ids)) {
            return redirect()->back()->with('error', 'No applications selected.');
        }

        // Update the status of all selected applications to 'Rejected'
        Application::whereIn('id', $ids)->update(['status' => 'Rejected']);

        return redirect()->back()->with('success', 'Selected applications have been rejected.');
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

        return Inertia::render('Admin/ApplicationDetails', [
            'application' => $application,
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
            'applicant.district_id' => 'required',
            'applicant.locality' => 'nullable|string',
            'applicant.bank_name' => 'nullable|string',
            'applicant.account_no' => 'nullable|string',
            'applicant.ifsc_code' => 'nullable|string',

            // Deceased fields
            'deceased.name' => 'required|string',

            'deceased.relative_id' => 'required',
            'deceased.relative_name' => 'required|string',
            'deceased.dob' => 'required|date',
            'deceased.gender' => 'required|string',
            'deceased.district_id' => 'nullable',
            'deceased.locality' => 'nullable|string',
            'deceased.constituency_id' => 'nullable',
            'deceased.time_of_death' => 'nullable|string',
            'deceased.place_of_death' => 'nullable|string',

            // Transport fields
            'transport.source_district' => 'nullable',
            'transport.destination_district' => 'nullable',
            // 'transport.source_district' => 'nullable',
            'transport.source_locality' => 'nullable',
            // 'transport.destination_district' => 'nullable',
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
                'district_id' => $request->input('applicant.district_id'),
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
                'relative_name' => $request->input('deceased.relative_name'),
                'dob' => $request->input('deceased.dob'),
                'gender' => $request->input('deceased.gender'),
                'locality' => $request->input('deceased.locality'),
                'constituency_id' => $request->input('deceased.constituency_id'),
                'time_of_death' => $request->input('deceased.time_of_death'),
                'place_of_death' => $request->input('deceased.place_of_death'),
            ]);
        }

        // dd($request->input('transport'));
        // Update the Transport record
        if ($application->transport) {
            $application->transport->update([
                'source_district' => $request->input('transport.source_district.id'),
                'destination_district' => $request->input('transport.destination_district.id'),
                'source_locality' => $request->input('transport.source_locality'),
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


    // Add at the top


// Add new methods
public function report(Request $request)
{
    $filters = $request->only(['status', 'district_id', 'constituency_id', 'start_date', 'end_date']);

    $applications = Application::with([
            'applicant.district',
            'deceased.district',
            'deceased.constituency',
            'transport.sourceDistrict',
            'transport.destinationDistrict',
        ])
        ->when($filters['status'] ?? null, fn($q) => $q->where('status', $filters['status']))
        ->when($filters['district_id'] ?? null, function ($q) use ($filters) {
            $q->whereHas('applicant', fn($q) => $q->where('district_id', $filters['district_id']));
        })
        ->when($filters['constituency_id'] ?? null, function ($q) use ($filters) {
            $q->whereHas('deceased', fn($q) => $q->where('constituency_id', $filters['constituency_id']));
        })
        ->when($filters['start_date'] ?? null, fn($q) => $q->whereDate('created_at', '>=', $filters['start_date']))
        ->when($filters['end_date'] ?? null, fn($q) => $q->whereDate('created_at', '<=', $filters['end_date']))
        ->orderBy('created_at', 'desc')
        ->get();

    return Inertia::render('Admin/Report', [
        'applications' => $applications,
        'filters' => $filters,
        'dropdowns' => [
            'statuses' => ['Pending', 'Approved', 'Rejected', 'Paid'],
            'districts' => District::all(),
            'constituencies' => Constituency::all(),
        ]
    ]);
}

public function export(Request $request)
{
    $filters = $request->validate([
        'status' => 'nullable|string',
        'district_id' => 'nullable|exists:districts,id',
        'constituency_id' => 'nullable|exists:constituencies,id',
        'start_date' => 'nullable|date',
        'end_date' => 'nullable|date|after_or_equal:start_date',
    ]);

    return Excel::download(new AdminApplicationsExport($filters), 'applications-'.now()->format('YmdHis').'.xlsx');
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
