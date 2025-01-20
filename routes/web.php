<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\DeceasedController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TrackingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Middleware\RoleMiddleware;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => true,
        'canRegister' => true,
        'laravelVersion' => app()->version(),
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');
Route::get('login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout'])->name('logout');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


// Amin login
Route::middleware('auth')->group(function () {
    Route::get('application', [AdminController::class, 'index'])->name('application');
    Route::post('/admin/application/{application}/approve', [AdminController::class, 'approve'])->name('admin.application.approve');
    Route::post('/admin/application/{application}/reject', [AdminController::class, 'reject'])->name('admin.application.reject');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::get('/ruang-phur-report-form',[DeceasedController::class,'index'])->name('form-fill');

// Form

Route::group(['middleware' => [RoleMiddleware::using('admin')]], function () {});
Route::group(['middleware' => [RoleMiddleware::using('approver')]], function () {});
Route::group(['middleware' => [RoleMiddleware::using('verifier')]], function () {});



// Form Submit
Route::get('/form-step-1', [FormController::class, 'step1'])->name('form.step1');
Route::post('/form-step-1', [FormController::class, 'storeStep1'])->name('form.storeStep1');

Route::get('/form-step-2', [FormController::class, 'step2'])->name('form.step2');
Route::post('/form-step-2', [FormController::class, 'storeStep2'])->name('form.storeStep2');

Route::get('/form-step-3', [FormController::class, 'step3'])->name('form.step3');
Route::post('/form-step-3', [FormController::class, 'storeStep3'])->name('form.storeStep3');

Route::post('/submit-form', [FormController::class, 'submit'])->name('form.submit');
Route::get('/form-otp', [FormController::class, 'otpPage'])->name('form.otp');
Route::post('/form-validate-otp', [FormController::class, 'validateOtp'])->name('form.validateOtp');



// Route::get('/deceased-tracking', [ApplicationController::class, 'index'])->name('track');

// Route::get('/track/{id}', [ApplicationController::class, 'trackApplication']);



//Form Track
Route::get('/deceased-tracking', [ApplicationController::class, 'index'])->name('track');
Route::get('/track/{id}', [ApplicationController::class, 'trackApplication']);


//Form View
// Route::get('/deceased-tracking', [ApplicationController::class, 'view'])->name('view');
// Route::get('/view-form/{id}', [ApplicationController::class, 'viewApplication']);
Route::get('/application/{id}/view', [ApplicationController::class, 'view'])->name('application.view');
require __DIR__ . '/auth.php';
