<?php

namespace App\Http\Controllers;

use App\Mail\OTPMail;
use App\Models\Applicant;
use App\Models\Application;
use App\Models\Attachment;
use App\Models\Constituency;
use App\Models\Deceased;
use App\Models\District;
use App\Models\Relative;
use App\Models\Transport;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;

class FormController extends Controller
{
    // Step 1
    public function step1()
    {
        $deceasedData = session('deceased', []);

        return Inertia::render('Form/FormStep1', [
            'form' => $deceasedData,
            'districts' => District::all(['id as value', 'name as label']),
            'relative' => Relative::all(['id as value', 'name as label']),
            'constituency' => Constituency::all(['id as value', 'name as label', 'district_id as district'])
        ]);
    }

    public function storeStep1(Request $request)
    {
        // dd($request);
        $validated = $request->validate([
            'name' => 'required|string|regex:/^[a-zA-Z\s]*$/',
            'relative_id' => 'required|exists:relatives,id',
            'relative_name' => 'required|string|regex:/^[a-zA-Z\s]*$/',
            'dob' => 'required|date',
            'gender' => 'required',
            'district_id' => 'required|exists:districts,id',
            'locality' => 'required|string',
            'constituency_id' => 'required|exists:constituencies,id',
            'time_of_death' => 'required|date',
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
            'source_locality' => 'max:255',
            'destination_district' => 'required|max:255',
            'destination_locality' => 'max:255',
            'distance' => 'required',
            'vehicle_number' => [
                'required',
                'string',
                'max:20',
                'regex:/^[A-Z]{2}-\d{2}-[A-Z]{2} \d{4}$/',
            ],

            'driver_name' => 'required|string|max:255',
            'driver_phone' => 'required|string|regex:/^[0-9]{10}$/',
            'transport_cost' => 'required',
            'source_lat' => 'numeric',
            'source_lng' => 'numeric',
            'destination_lat' => 'numeric',
            'destination_lng' => 'numeric',

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
        // Validate the request
        $validated = $request->validate([
            'name' => 'required|string',
            'mobile' => 'required|string',
            'district_id' => 'required',
            'locality' => 'required|string',
            'bank_name' => 'required|string',
            'account_no' => 'required|string',
            'ifsc_code' => 'required|string',
            'id_proof' => 'required|file|mimes:pdf,jpg,jpeg,png|max:2048',
            'receipt' => 'required|file|mimes:pdf,jpg,jpeg,png|max:2048',
            'death_certificate' => 'required|file|mimes:pdf,jpg,jpeg,png|max:2048',
            'additional_document' => 'required|file|mimes:pdf,jpg,jpeg,png|max:2048',
        ]);

        // Extract district_id value
        $validated['district_id'] = is_array($validated['district_id']) ? $validated['district_id']['value'] : $validated['district_id'];

        // Handle file uploads and store paths
        $filePaths = [
            'id_proof' => $request->hasFile('id_proof') ? $request->file('id_proof')->store('documents', 'public') : null,
            'receipt' => $request->hasFile('receipt') ? $request->file('receipt')->store('documents', 'public') : null,
            'death_certificate' => $request->hasFile('death_certificate') ? $request->file('death_certificate')->store('documents', 'public') : null,
            'additional_document' => $request->hasFile('additional_document') ? $request->file('additional_document')->store('documents', 'public') : null,
        ];

        // Prepare file URLs
        $fileUrls = array_map(function ($filePath) {
            return $filePath ? asset('storage/' . $filePath) : null;
        }, $filePaths);
        info($fileUrls);
        // Store only the necessary data in session (excluding file objects)
        $sessionData = array_merge($validated, $filePaths);
        session()->put('applicant', $sessionData);

        // Generate OTP
        $otp = random_int(1000, 9999);
        session()->put('otp', $otp);

        // Send OTP via SMS
        $client = new \GuzzleHttp\Client();
        // $templateId = "1007093779326924573";
        // $message = "OTP for RTI Registration is " . $otp . ". DoICT";

        // $client->request('POST', 'https://sms.mizoram.gov.in/api', [
        //     'form_params' => [
        //         'api_key' => 'b53366c91585c976e6173e69f6916b2d',
        //         'number' => $validated['mobile'],
        //         'message' => $message,
        //         'template_id' => $templateId
        //     ]
        // ]);
        $templateId = "1407173926279603243";
        $message = "Please enter OTP ". $otp ." to submit your Ruangphur application.";
        $response=Http::withHeaders([
            'Authorization' => "Bearer " . env('SMS_TOKEN'),
        ])->get("https://sms.msegs.in/api/send-otp",[
            'template_id' => $templateId,
            'message' => $message,
            'recipient'=>$validated['mobile']
        ]);

        \Log::info("Generated OTP: $otp");

        return redirect()->route('form.otp');
       
    }







    // OTP Page
    public function otpPage()
    {
        $applicantData = session('applicant', []);
        return Inertia::render(
            'Form/OTP',
            ['phone' => $applicantData['mobile']]
        );
    }



    public function resendOtp(Request $request)
{
    // Check if applicant data exists in session
    $applicantData = session('applicant');
    if (!$applicantData) {
        return redirect()->route('form.step3')->withErrors(['error' => 'Session expired. Please submit the form again.']);
    }

    // Generate new OTP
    $otp = random_int(1000, 9999);
    session()->put('otp', $otp);

    // Send OTP via SMS
    $client = new \GuzzleHttp\Client();
    $templateId = "1407173926279603243";
    $message = "Please enter OTP . $otp . to submit your Ruangphur application.";
    // $message = "OTP for RTI Registration is " . $otp . ". DoICT";

    try {
        // $client->request('POST', 'https://sms.msegs.in/api', [
        //     'form_params' => [
        //         'api_key' => 'b53366c91585c976e6173e69f6916b2d',
        //         'number' => $applicantData['mobile'],
        //         'message' => $message,
        //         'template_id' => $templateId
        //     ]
        // ]);
        $response=Http::withHeaders([
            'Authorization' => "Bearer " . env('SMS_TOKEN'),
        ])->get("https://sms.msegs.in/api/send-sms",[
            'template_id' => $templateId,
            'message' => $message,
            'recipient'=>$applicantData['mobile']
        ]);
    } catch (\Exception $e) {
        \Log::error("Failed to resend OTP: " . $e->getMessage());
        return back()->withErrors(['error' => 'Failed to resend OTP. Please try again.']);
    }

    \Log::info("Resent OTP: $otp");

    return back()->with('success', 'OTP has been resent successfully.');
}




    public function validateOtp(Request $request)
    {
        // Validate OTP
        $request->validate(['otp' => 'required|digits:4']);

        // Retrieve OTP from session
        $sessionOtp = session('otp');
        if ($sessionOtp != $request->otp) {
            return back()->withErrors(['otp' => 'Invalid OTP.']);
        }

        // Retrieve form data from session
        $deceasedData = session('deceased');
        $transportData = session('transport');
        $applicantData = session('applicant');

        // Fix gender and relative data for deceased
        if (isset($deceasedData['gender']) && is_array($deceasedData['gender'])) {
            $deceasedData['gender'] = $deceasedData['gender']['value'];
        }

        // Create the Applicant record
        $applicant = Applicant::create([
            ...$applicantData,
            'district_id' => $applicantData['district_id'],
        ]);

        // Create the Deceased record
        $deceased = Deceased::create([...$deceasedData]);

        // Check if source_district and destination_district are already in transportData, 
        // otherwise add them manually
        if (isset($transportData['source_district']['value'])) {
            $transportData['source_district'] = $transportData['source_district']['value'];
        }
        if (isset($transportData['destination_district']['value'])) {
            $transportData['destination_district'] = $transportData['destination_district']['value'];
        }

        // Create the Transport record
        $transport = Transport::create([
            ...$transportData
        ]);
        $attachment = Attachment::create([

            'id_proof' => $applicantData['id_proof'] ?? null,
            'receipt' => $applicantData['receipt'] ?? null,
            'death_certificate' => $applicantData['death_certificate'] ?? null,
            'additional_document' => $applicantData['additional_document'] ?? null,
        ]);
        // Create the Application record with the attachment_id
        $application = Application::create([
            'applicant_id' => $applicant->id,
            'deceased_id' => $deceased->id,
            'transport_id' => $transport->id,
            'attachment_id' => $attachment->id,
            'status' => 'Pending',
        ]);

        // Create the Attachment record


        // Clear session data
        session()->forget(['deceased', 'transport', 'applicant', 'otp']);

        // Pass the application number to the FormComplete page
        return Inertia::render('Form/FormComplete', [
            'application_no' => $application->application_no,
        ]);
    }







    // Validate OTP and Submit
    //    public function validateOtp(Request $request)
    //    {
    //        // Validate OTP
    //        $request->validate(['otp' => 'required|digits:6']);
    //
    //        // Retrieve OTP from session
    //        $sessionOtp = session('otp');
    //        if ($sessionOtp != $request->otp) {
    //            return back()->withErrors(['otp' => 'Invalid OTP.']);
    //        }
    //
    //        // Retrieve form data from session
    //        $deceasedData = session('deceased');
    //        $transportData = session('transport');
    //        $applicantData = session('applicant');
    //
    //        // Fix the gender data (assuming 'gender' is an object)
    //        if (isset($deceasedData['gender']) && is_array($deceasedData['gender'])) {
    //            $deceasedData['gender'] = $deceasedData['gender']['value'];  // Extract the value
    //            $deceasedData['relative'] = $deceasedData['relative']['value'];  // Extract the value
    //        }
    //
    //        // Create the Applicant
    //        $applicant = Applicant::create(array_merge($applicantData, [
    //            'district' => $applicantData['district']['value'],
    //        ]));
    //
    //        // Generate the Application Number (only once)
    //        $applicationNumber = $this->generateApplicationNumber();
    //
    //        // Create the Application record
    //        $application = Application::create([
    //            'applicant_id' => $applicant->id,
    //            'status' => 'Pending',
    //            'application_no' => $applicationNumber,
    //        ]);
    //
    //        // Create the Deceased record
    //        $deceased = Deceased::create(array_merge($deceasedData, [
    //            'application_id' => $application->id,
    //            'district' => $deceasedData['district']['value'],
    //            'constituency' => $deceasedData['constituency']['value']
    //        ]));
    //
    //        // Create the Transport record
    //        Transport::create(array_merge($transportData, [
    //            'deceased_id' => $deceased->id,
    //            'source_district' => $transportData['source_district']['value'],
    //            'destination_district' => $transportData['destination_district']['value']
    //        ]));
    //
    //        // Clear session data
    //        session()->forget(['deceased', 'transport', 'applicant', 'otp']);
    //
    //        // Pass the application number to the FormComplete page
    //        return Inertia::render('Form/FormComplete', [
    //            'application_no' => $applicationNumber,  // Use the same application number
    //        ]);
    //    }


    // public function validateOtp(Request $request)
    // {
    //     //        dd($request);
    //     // Validate OTP
    //     $request->validate(['otp' => 'required|digits:6']);

    //     // Retrieve OTP from session
    //     $sessionOtp = session('otp');
    //     if ($sessionOtp != $request->otp) {
    //         return back()->withErrors(['otp' => 'Invalid OTP.']);
    //     }

    //     // Retrieve form data from session
    //     $deceasedData = session('deceased');
    //     $transportData = session('transport');
    //     $applicantData = session('applicant');

    //     // Fix gender and relative data
    //     if (isset($deceasedData['gender']) && is_array($deceasedData['gender'])) {
    //         $deceasedData['gender'] = $deceasedData['gender']['value'];

    //     }

    //     // Create the Applicant
    //     $applicant = Applicant::create([
    //         ...$applicantData,
    //         'district_id' => $applicantData['district_id']
    //         //            'district_id' => $applicantData['district']['value'],
    //     ]);

    //     // Generate the Application Number
    //     // $applicationNumber = $this->generateApplicationNumber();

    //     // Create the Deceased record
    //     $deceased = Deceased::create([
    //         ...$deceasedData,



    //     ]);

    //     // Create the Transport record
    //     $transport = Transport::create([
    //         ...$transportData,

    //         'source_district' => $transportData['source_district']['value'],
    //         'destination_district' => $transportData['destination_district']['value'],
    //     ]);


    //     // Create the Application record
    //     $application = Application::create([
    //         'applicant_id' => $applicant->id,
    //         'deceased_id' => $deceased->id,
    //         'transport_id' => $transport->id,

    //         'status' => 'Pending',
    //         // 'application_no' => $applicationNumber,
    //     ]);




    //     // Clear session data
    //     session()->forget(['deceased', 'transport', 'applicant', 'otp']);

    //     // Pass the application number to the FormComplete page
    //     return Inertia::render('Form/FormComplete', [
    //         'application_no' => $application->application_no,
    //     ]);
    // }




    // private function generateApplicationNumber()
    // {
    //     // Generate a shorter unique ID with 6 characters
    //     $randomString = strtoupper(substr(uniqid(), -6));
    //     return 'RNG-' . $randomString;
    // }
}
