<?php
use Illuminate\Support\Facades\Route;

Route::middleware('api')->group(function () {
    Route::get('/get-district',[\App\Http\Controllers\API\SubmitFormController::class,'getDistrict']);
    Route::get('/get-constituency',[\App\Http\Controllers\API\SubmitFormController::class,'getConstituency']);
    Route::get('/get-relative',[\App\Http\Controllers\API\SubmitFormController::class,'getRelative']);
    Route::post('/upload-mitthi-document',[\App\Http\Controllers\API\SubmitFormController::class,'uploadMitthiDocument']);
    Route::get('/send-otp',[\App\Http\Controllers\API\SubmitFormController::class,'sendOtp']);
    Route::get('/verify-otp',[\App\Http\Controllers\API\SubmitFormController::class,'verifyOtp']);
    Route::post('/submit-form',[\App\Http\Controllers\API\SubmitFormController::class,'submitForm']);
});
