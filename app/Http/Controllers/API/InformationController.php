<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Information;
use Illuminate\Http\Request;

class InformationController extends Controller
{
    public function getAllInformation(Request $request)
    {
        $data=Information::query()->get();
        return response()->json(['data'=>$data],200);
    }
}
