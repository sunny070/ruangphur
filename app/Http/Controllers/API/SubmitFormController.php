<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Deceased;
use Illuminate\Http\Request;

class SubmitFormController extends Controller
{
    public function submitDeceased(Request $request)
    {

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'relative_id' => 'nullable|integer',
            'relative_name' => 'nullable',
            'dob' => 'required',
            'gender' => 'required',
            'district_id' => 'required',
            'locality' => 'required',
            'constituency_id' => 'required',
            'time_of_death' => 'required',
            'place_of_death' => 'required',
        ]);
        info($validatedData);
        $record = Deceased::query()->create($validatedData);
        return response()->json($record, 201);
    }
}
