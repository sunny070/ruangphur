<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TrackingController extends Controller
{
    public function trackById(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'trackingId' => 'required|string|exists:applications,application_no',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => "The selected tracking id is invalid.",
            ], 200);
        }

        $data = Application::where('application_no', $request->trackingId)->first();

        return response()->json([
            'status' => 200,
            'message' => 'Application found',
            'data' => $data
        ], 200);
    }

    public function getAllApplication(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'trackingId' => 'required|string|exists:applications,application_no',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => "The selected tracking id is invalid.",
            ], 200);
        }
        $data = Application::where('application_no', $request->trackingId)->with([
            'applicant.district',
            'deceased.relative',
            'deceased.district',
            'deceased.constituency',
            'transport.sourceDistrict',
            'transport.destinationDistrict',
            ])->first();
        return response()->json([
            'status' => 200,
            'message' => 'Application found',
            'data' => $data
        ], 200);
    }
}
