<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Note;
use Illuminate\Http\Request;

class FaqController extends Controller
{
    public function getFaq(Request $request)
    {
        $offset=$request->offset??0;
        $limit=$request->limit??5;

        $faq=Note::query()->where('status','published')->offset($offset)->limit($limit)->get();
        return response()->json(['data'=>$faq],200);
    }

//    public function getAllFaq()
//    {
//        $offset=$request->offset??0;
//        $limit=$request->limit??5;
//
//        $faq=Note::query()->offset($offset)->limit($limit)->paginate();
//        return response()->json(['data'=>$faq],200);
//    }
}
