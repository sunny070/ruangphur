<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use App\Models\Application;
use App\Models\Deceased;
use App\Models\District;
use App\Models\Transport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FormController extends Controller
{
    // Step 1
    public function step1()
    {
        $deceasedData = session('deceased', []); // Retrieve session data or empty array
        return Inertia::render('Form/FormStep1', [

            'form' => $deceasedData,
            'districts' => District::query()->get(['id as value', 'name as label']),
        ]);
    }

    public function storeStep1(Request $request)
    {
        // dd($request);
        $validated = $request->validate([
            'name' => 'required|string|regex:/^[a-zA-Z\s]*$/', // Only letters and spaces
            'relative' => 'required|string',
            'relative_name' => 'required|string|regex:/^[a-zA-Z\s]*$/',
            'dob' => 'required|date',
            'gender' => 'required',
            'mobile' => ['required', 'string', 'regex:/^[0-9]{10}$/'], // 10 digits only
            'district' => 'required|string',
            'locality' => 'required|string',
            'time_of_death' => 'required|string',
            'place_of_death' => 'required|string',

        ]);

        session()->put('deceased', $validated);

        return redirect()->route('form.step2');
    }

    // Step 2
    public function step2()
    {
        $transportData = session('transport', []);


        return Inertia::render('Form/FormStep2', [
            'form' => $transportData,
            'districts' => District::query()->get(['id as value', 'name as label']),
        ]);
    }

    // public function storeStep2(Request $request)
    // {
    //     $validated = $request->validate([
    //         'source_district' => 'required|string',
    //         'source_locality' => 'required|string',
    //         'destination_district' => 'required|string',
    //         'destination_locality' => 'required|string',
    //         'distance' => 'required|string',
    //         'vehicle_number' => 'required|string',
    //         'driver_name' => 'required|string',
    //         'driver_phone' => 'required|string',
    //         'vehicle_owner' => 'required|string',
    //         'transport_cost' => 'required|string',
    //     ]);

    //     session()->put('transport', $validated);

    //     return redirect()->route('form.step3');
    // }
    public function storeStep2(Request $request)
    {
        // dd($request);
        $validated = $request->validate([
            'source_district' => 'required|max:255',
            'source_locality' => 'required|string|max:255',
            'destination_district' => 'required|string|max:255',
            'destination_locality' => 'required|string|max:255',
            'distance' => 'required|numeric|min:1', // Distance must be a positive number
            'vehicle_number' => 'required|string|max:20',
            'vehicle_name' => 'required|string|max:255',
            'driver_name' => 'required|string|max:255',
            'driver_phone' => 'required|string|regex:/^[0-9]{10}$/', // Only 10-digit phone numbers
            'transport_cost' => 'required|numeric|min:0', // Transport cost must be a positive number
        ]);

        session()->put('transport', $validated);

        return redirect()->route('form.step3');
    }


    // Step 3
    public function step3()
    {
        $applicantData = session('applicant', []);
        return Inertia::render('Form/FormStep3', ['form' => $applicantData]);
    }

    public function storeStep3(Request $request)
    {
        // dd($request->all());
        $validated = $request->validate([
            'name' => 'required|string',
            'mobile' => 'required|string',
            'district' => 'required|string',
            'locality' => 'required|string',
            'bank_name' => 'required|string',
            'account_no' => 'required|string',
            'ifsc_code' => 'required|string',
            'id_proof' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048',
            'receipt' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048',
            'death_certificate' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048',
            'additional_document' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048',
        ]);

        // Handle file uploads
        if ($request->hasFile('id_proof')) {
            $validated['id_proof'] = $request->file('id_proof')->store('documents', 'public');
        }
        if ($request->hasFile('receipt')) {
            $validated['receipt'] = $request->file('receipt')->store('documents', 'public');
        }
        if ($request->hasFile('death_certificate')) {
            $validated['death_certificate'] = $request->file('death_certificate')->store('documents', 'public');
        }
        if ($request->hasFile('additional_document')) {
            $validated['additional_document'] = $request->file('additional_document')->store('documents', 'public');
        }

        session()->put('applicant', $validated);

        // Generate OTP
        $otp = random_int(100000, 999999);
        session()->put('otp', $otp);

        \Log::info("Generated OTP: $otp");

        return redirect()->route('form.otp');
    }

    // public function storeStep3(Request $request)
    // {
    //     $validated = $request->validate([
    //         'name' => 'required|string',
    //         'mobile' => 'required|string',
    //         'district' => 'required|string',
    //         'locality' => 'required|string',
    //         'bank_name' => 'required|string',
    //         'account_no' => 'required|string',
    //         'ifsc_code' => 'required|string',
    //     ]);

    //     // Add the authenticated user's ID to the validated data


    //     session()->put('applicant', $validated);

    //     // Generate OTP
    //     $otp = random_int(100000, 999999);
    //     session()->put('otp', $otp);

    //     \Log::info("Generated OTP: $otp");

    //     // Logic to send OTP (e.g., SMS or email)
    //     // $mobile = session('deceased')['mobile'];
    //     // Use your preferred service to send OTP to $mobile.

    //     return redirect()->route('form.otp');
    // }

    // OTP Page
    public function otpPage()
    {
        return Inertia::render('Form/OTP');
    }

    // Validate OTP and Submit
    public function validateOtp(Request $request)
    {   
        // dd($request);
        // Validate OTP
        $request->validate(['otp' => 'required|digits:6']);

        // Retrieve OTP from session
        $sessionOtp = session('otp');
        if ($sessionOtp != $request->otp) {
            return back()->withErrors(['otp' => 'Invalid OTP.']);
        }

        // Retrieve form data from session
        $deceasedData = session('deceased');
        $transportData = session('transport');
        $applicantData = session('applicant');

        // Fix the gender data (assuming 'gender' is an object)
        if (isset($deceasedData['gender']) && is_array($deceasedData['gender'])) {
            $deceasedData['gender'] = $deceasedData['gender']['value'];  // Extract the value
        }

        // Create the Applicant
        $applicant = Applicant::create($applicantData);

        // Generate the Application Number
        $applicationNumber = $this->generateApplicationNumber();

        // Create the Application record
        $application = Application::create([
            'applicant_id' => $applicant->id,
            'status' => 'Pending',
            'application_no' => $this->generateApplicationNumber(),
        ]);

        // Create the Deceased record
        $deceased = Deceased::create(array_merge($deceasedData, ['application_id' => $application->id]));


        Transport::create(array_merge($transportData,[
            'deceased_id' => $deceased->id,
            'source_district'=> $transportData['source_district']['value'],

        ]));
        // Create the Transport record
        // Transport::create(array_merge($transportData,
        // 'source_district'=> $transportData['source_distict']['value'],
        // ['deceased_id' => $deceased->id]));0

        // Clear session data
        session()->forget(['deceased', 'transport', 'applicant', 'otp']);

        // Pass the application number to the FormComplete page
        return Inertia::render('Form/FormComplete', [
            'application_no' => $applicationNumber,  // Pass the generated application number
        ]);
    }



    private function generateApplicationNumber()
    {
        return 'RNG-' . strtoupper(uniqid());
    }
}
