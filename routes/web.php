<?php

use App\Http\Controllers\DeceasedController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/ruang-phur-report-form',[DeceasedController::class,'index'])->name('form-fill');



// Step 1
Route::get('/form-step-1', [FormController::class, 'step1'])->name('form.step1'); // Display Step 1 form
Route::post('/form-step-1', [FormController::class, 'storeStep1'])->name('form.storeStep1'); // Handle Step 1 form submission

// Step 2
Route::get('/form-step-2', [FormController::class, 'step2'])->name('form.step2'); // Display Step 2 form
Route::post('/form-step-2', [FormController::class, 'storeStep2'])->name('form.storeStep2'); // Handle Step 2 form submission

// Step 3
Route::get('/form-step-3', [FormController::class, 'step3'])->name('form.step3'); // Display Step 3 form
Route::post('/form-step-3', [FormController::class, 'storeStep3'])->name('form.storeStep3'); // Handle Step 3 form submission

// Final Submission
Route::post('/submit-form', [FormController::class, 'submit'])->name('form.submit'); // Finalize and save all data


require __DIR__.'/auth.php';
