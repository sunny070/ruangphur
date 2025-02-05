<?php
use Illuminate\Support\Facades\Route;

Route::middleware('api')->group(function () {
    Route::get('/test', function () {
        return response()->json(['message' => 'API Route Working!']);
    });
    Route::post('/submit-deceased',[\App\Http\Controllers\API\SubmitFormController::class,'submitDeceased']);
});
