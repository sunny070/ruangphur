<?php

namespace App\Http\Controllers;

use App\Mail\OTPMail;
use App\Models\Applicant;
use App\Models\Application;
use App\Models\Constituency;
use App\Models\Deceased;
use App\Models\District;
use App\Models\Transport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;

class FormController extends Controller
{
    // Step 1
    public function step1()
    {
        $deceasedData = session('deceased', []); // Retrieve session data or empty array
        // dd(Constituency::query()->get(['id as value', 'name as label', 'district_id as district']));
        return Inertia::render('Form/FormStep1', [

            'form' => $deceasedData,
            'districts' => District::query()->get(['id as value', 'name as label']),
            'constituency' => Constituency::query()->get(['id as value', 'name as label', 'district_id as district'])
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
           
            'district' => 'required',
            'locality' => 'required|string',
            'constituency' => 'required',
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

   
    public function storeStep2(Request $request)
    {
        // dd($request);
        $validated = $request->validate([
            'source_district' => 'required|max:255',
            'source_locality' => 'required|max:255',
            'destination_district' => 'required|max:255',
            'destination_locality' => 'required|max:255',
            'distance' => 'required|numeric|min:1',
            'vehicle_number' => 'required|string|max:20',
            
            'driver_name' => 'required|string|max:255',
            'driver_phone' => 'required|string|regex:/^[0-9]{10}$/', 
            'transport_cost' => 'required|numeric|min:0',
            'source_lat' => 'required|numeric',
            'source_lng' => 'required|numeric',
            'destination_lat' => 'required|numeric',
            'destination_lng' => 'required|numeric',
            'distance' => 'required|numeric',
        ]);

        session()->put('transport', $validated);

        return redirect()->route('form.step3');
    }


    // Step 3
    public function step3()
    {
        $applicantData = session('applicant', []);
        return Inertia::render('Form/FormStep3', [
            'form' => $applicantData,
            'districts' => District::query()->get(['id as value', 'name as label']),
    ]);
    }

    public function storeStep3(Request $request)
    {
       
        $validated = $request->validate([
            'name' => 'required|string',
            'mobile' => 'required|string',
            'district' => 'required',
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
            \Log::info("ID Proof saved at: " . $validated['id_proof']);
        }
        if ($request->hasFile('receipt')) {
            $validated['receipt'] = $request->file('receipt')->store('documents', 'public');
            \Log::info("Receipt saved at: " . $validated['receipt']);
        }
        if ($request->hasFile('death_certificate')) {
            $validated['death_certificate'] = $request->file('death_certificate')->store('documents', 'public');
            \Log::info("Death Certificate saved at: " . $validated['death_certificate']);
        }
        if ($request->hasFile('additional_document')) {
            $validated['additional_document'] = $request->file('additional_document')->store('documents', 'public');
            \Log::info("Additional Document saved at: " . $validated['additional_document']);
        }
        
    
        session()->put('applicant', $validated);
    
        // Generate OTP
        $otp = random_int(100000, 999999);
        session()->put('otp', $otp);
    
        // Send OTP via email
        Mail::to($validated['mobile'])->send(new OTPMail($otp, $validated['name']));
    
        \Log::info("Generated OTP: $otp");
    
        return redirect()->route('form.otp');
    }

   

    // OTP Page
    public function otpPage()
    {
        return Inertia::render('Form/OTP');
    }

    // Validate OTP and Submit
    public function validateOtp(Request $request)
{   
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
    $applicant = Applicant::create(array_merge($applicantData,[
        'district' => $applicantData['district']['value'],
    ]));

    // Generate the Application Number (only once)
    $applicationNumber = $this->generateApplicationNumber();

    // Create the Application record
    $application = Application::create([
        'applicant_id' => $applicant->id,
        'status' => 'Pending',
        'application_no' => $applicationNumber,
    ]);

    // Create the Deceased record
    $deceased = Deceased::create(array_merge($deceasedData, [
        'application_id' => $application->id,
        'district' => $deceasedData['district']['value'],
        'constituency' =>$deceasedData['constituency']['value']
    ]));

    // Create the Transport record
    Transport::create(array_merge($transportData, [
        'deceased_id' => $deceased->id,
        'source_district' => $transportData['source_district']['value'],
        'destination_district' => $transportData['destination_district']['value']
    ]));

    // Clear session data
    session()->forget(['deceased', 'transport', 'applicant', 'otp']);

    // Pass the application number to the FormComplete page
    return Inertia::render('Form/FormComplete', [
        'application_no' => $applicationNumber,  // Use the same application number
    ]);
}

private function generateApplicationNumber()
{
    // Generate a shorter unique ID with 6 characters
    $randomString = strtoupper(substr(uniqid(), -6));
    return 'RNG-' . $randomString;
}

}
