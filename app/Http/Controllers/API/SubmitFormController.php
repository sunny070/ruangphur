<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Applicant;
use App\Models\Application;
use App\Models\Attachment;
use App\Models\Constituency;
use App\Models\Deceased;
use App\Models\District;
use App\Models\Relative;
use App\Models\Transport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class SubmitFormController extends Controller
{
    public function getDistrict(Request $request)
    {
        $district=District::query()->get();
        return response()->json(['data'=>$district]);
    }

    public function getConstituency(Request $request)
    {
        $districtId=$request->district_id;
        $constituency=Constituency::query()->where('district_id',$districtId)->with('district')->get();
        return response()->json(['data'=>$constituency]);
    }

    public function getRelative(Request $request)
    {
        $relation=Relative::query()->get();
        info($relation);
        return response()->json(['data'=>$relation]);
    }

    public function uploadMitthiDocument(Request $request)
    {

//         Validate the incoming request
        // Custom validation with error response
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Max 2MB
        ]);
        if ($validator->fails()) {
            $errorMessage = $validator->errors()->first();

            // Handle different error messages
            return match (true) {
                str_contains($errorMessage, 'required') => response()->json(['error' => 'Image file is required.','status'=>422], 200),
                str_contains($errorMessage, 'mimes') => response()->json(['error' => 'Invalid format. Only JPEG, PNG, JPG, GIF, and SVG are allowed.','status'=>422], 200),
                str_contains($errorMessage, 'max') => response()->json(['error' => 'File size must not exceed 2MB.','status'=>422], 200),
                default => response()->json(['error' => 'Invalid request. Please check your file.','status'=>422], 200),
            };

    }

        // Store the image
        $path = $request->file('image')->store('documents', 'public');
        // Return the path or URL of the uploaded image
        return response()->json(['url' => $path,'status'=>201], 200);
    }

    public function sendOtp(Request $request)
    {
        // Validate phone/email input
        $validator = Validator::make($request->all(), [
            'phone' => 'required|digits:10', // Max 2MB
        ]);
        if ($validator->fails()) {
            $errorMessage = $validator->errors()->first();
            return match (true) {
                str_contains($errorMessage, 'required') => response()->json(['message' => 'Phone no is required','status'=>422], 200),
                str_contains($errorMessage, 'digit') => response()->json(['message' => 'Phone number should be 10 digits','status'=>422], 200),
                default => response()->json(['message' => 'Invalid request. Please check your file.','status'=>422], 200),
            };
        }
        $otp = rand(1000, 9999);
        // Store OTP in cache (valid for 5 minutes)
       $storedOtp= Cache::put('otp_' . $request->phone, $otp, now()->addMinutes(5));
        // Send OTP via SMS=
        $client = new \GuzzleHttp\Client();
        $templateId = "1007093779326924573";
        $message = "OTP for Ruangphur is " . $otp . ". DoICT";

        $client->request('POST', 'https://sms.mizoram.gov.in/api', [
            'form_params' => [
                'api_key' => 'b53366c91585c976e6173e69f6916b2d',
                'number' => $request->phone,
                'message' => $message,
                'template_id' => $templateId
            ]
        ]);
        return response()->json(['message' => "OTP $otp sent successfully.",'status'=>201], 200);
    }

    public function verifyOtp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required|digits:10',
            'otp'=>'required',
        ]);
        if ($validator->fails()) {
            $errorMessage = $validator->errors()->first();
            return match (true) {
                str_contains($errorMessage, 'required') => response()->json(['message' => 'Phone no is required','status'=>422], 200),
                str_contains($errorMessage, 'digit') => response()->json(['message' => 'Phone number should be 10 digits','status'=>422], 200),
                default => response()->json(['message' => 'Invalid request. Please check your file.','status'=>422], 200),
            };
        }
        $storedOTP = Cache::get('otp_' . $request->phone);
        if (!$storedOTP) {
            return response()->json(['message' => 'OTP expired or not found.','status'=>400], 200);
        }

        if ($storedOTP != $request->otp) {
            return response()->json(['message' => 'Invalid OTP.','status'=>400], 200);
        }

        // OTP is valid, remove it from cache
        Cache::forget('otp_' . $request->phone);

        return response()->json(['message' => 'OTP verified.','status'=>201], 200);
    }

    public function submitForm(Request $request)
    {

      $request->validate([
          'deceaseds.name'=>'required',
          'deceaseds.relative_id'=>'required',
          'deceaseds.dob'=>'required',
          'deceaseds.gender'=>'required',
          'deceaseds.district_id'=>'required',
          'deceaseds.locality'=>'required',
          'deceaseds.constituency_id'=>'required',
          'deceaseds.time_of_death'=>'required',
          'deceaseds.place_of_death'=>'required',
          //TRANSPORT
          'transports.source_district'=>'required',
          'transports.source_locality'=>'required',
          'transports.destination_district'=>'required',
          'transports.destination_locality'=>'required',
          'transports.vehicle_number'=>'required',
          'transports.driver_name'=>'required',
          'transports.driver_phone'=>'required',
          'transports.source_lat'=>'required',
          'transports.source_lng'=>'required',
          'transports.destination_lat'=>'required',
          'transports.destination_lng'=>'required',
          'transports.distance'=>'required',
          'transports.transport_cost'=>'required',

          //APPLICANT
          'applicants.name'=>'required',
          'applicants.mobile'=>'required',
          'applicants.district_id'=>'required',
          'applicants.locality'=>'required',
          'applicants.bank_name'=>'required',
          'applicants.account_no'=>'required',
          'applicants.ifsc_code'=>'required',
//
          //FILE
          'attachments.id_proof'=>'required',
          'attachments.receipt'=>'required',
          'attachments.death_certificate'=>'required',
          'attachments.additional_document'=>'required',



        ]);

        try{
            DB::beginTransaction();
            $deceased=Deceased::query()->create($request->input('deceaseds'));
            $transport=Transport::query()->create($request->input('transports'));
            $applicant=Applicant::query()->create($request->input('applicants'));
            $attachments=Attachment::query()->create($request->input('attachments'));
            $application=Application::query()->create(['applicant_id'=>$applicant->id,'deceased_id'=>$deceased->id,'transport_id'=>$transport->id,'attachment_id'=>$attachments->id,'status'=>'Pending']);
            DB::commit();
            return response()->json(['message' => 'Data saved successfully!','status'=>201,'data'=>$application->application_no], 200);
        }catch (\Exception $e){
            info($e);
            DB::rollBack();
            return response()->json(['error' => 'Something went wrong!', 'details' => $e->getMessage()], 500);
        }

    }
}
