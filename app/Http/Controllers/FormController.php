<?php
namespace App\Http\Controllers;

use App\Models\Applicant;
use App\Models\Deceased;
use App\Models\Transport;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormController extends Controller
{
    // Step 1
    public function step1()
    {
        return Inertia::render('Form/FormStep1');
    }

    public function storeStep1(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'relative_name' => 'required|string',
            'dob' => 'required|date',
            'gender' => 'required|string',
            'mobile' => 'required|string',
            'district' => 'required|string',
            'locality' => 'required|string',
        ]);

        session()->put('deceased', $validated);

        return redirect()->route('form.step2');
    }

    // Step 2
    public function step2()
    {
        return Inertia::render('Form/FormStep2');
    }

    public function storeStep2(Request $request)
    {
        $validated = $request->validate([
            'source_district' => 'required|string',
            'source_locality' => 'required|string',
            'destination_district' => 'required|string',
            'destination_locality' => 'required|string',
            'distance' => 'required|string',
            'vehicle_number' => 'required|string',
            'driver_name' => 'required|string',
            'driver_phone' => 'required|string',
            'vehicle_owner' => 'required|string',
            'transport_cost' => 'required|string',
        ]);

        session()->put('transport', $validated);

        return redirect()->route('form.step3');
    }

    // Step 3
    public function step3()
    {
        return Inertia::render('Form/FormStep3');
    }

    public function storeStep3(Request $request)
    {
        $validated = $request->validate([
            'district' => 'required|string',
            'locality' => 'required|string',
            'bank_name' => 'required|string',
            'account_no' => 'required|string',
            'ifsc_code' => 'required|string',
        ]);

        session()->put('applicant', $validated);

        return redirect()->route('form.submit');
    }

    // Final submission
    public function submit(Request $request)
    {
        $deceasedData = session('deceased');
        $transportData = session('transport');
        $applicantData = session('applicant');

        // Save data to the database
        $applicant = Applicant::create($applicantData);
        $deceased = Deceased::create(array_merge($deceasedData, ['application_id' => $applicant->id]));
        Transport::create(array_merge($transportData, ['deceased_id' => $deceased->id]));

        // Clear session data
        session()->forget(['deceased', 'transport', 'applicant']);

        return Inertia::render('Form/FormSuccess');
    }
}
