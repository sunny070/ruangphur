<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DeceasedController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TrackingController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerifierController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Middleware\RoleMiddleware;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => true,
        'canRegister' => true,
        'laravelVersion' => app()->version(),
        'phpVersion' => PHP_VERSION,
        'faqs' => \App\Models\Note::where('status', 'published')->get()
    ]);
})->name('home');
Route::get('login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout'])->name('logout');


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('admin.dashboard');

// Route::get('/verifier/dashboard', function () {
//     return Inertia::render('Verifier/VerifierDashboard');
// })->middleware(['auth', 'verified'])->name('verifier.dashboard');


//User Controller
Route::group(['prefix' => 'user'], function () {
    Route::get('index', [UserController::class, 'index'])->name('user.index');
    Route::get('create', [UserController::class, 'create'])->name('user.create');
    Route::get('{model}', [UserController::class, 'edit'])->name('user.edit');
    Route::post('', [UserController::class, 'store'])->name('user.store');
    Route::put('{model}', [UserController::class, 'update'])->name('user.update');
    Route::delete('{model}', [UserController::class, 'destroy'])->name('user.destroy');
});





// Amin login
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['role:admin'])->name('admin.dashboard');



    Route::get('/admin/application', [AdminController::class, 'index'])->middleware(['role:admin'])->name('admin.application');
    Route::get('/admin/bill', [AdminController::class, 'bill'])->middleware(['role:admin'])->name('admin.bill');
    // Route::get('/admin/report', [AdminController::class, 'report'])->name('admin.report');

    // Report
    Route::get('/admin/report', [AdminController::class, 'report'])->middleware(['role:admin'])->name('admin.report');
    Route::get('/admin/report/export', [AdminController::class, 'export'])->middleware(['role:admin'])->name('admin.report.export');
    // Route::post('/admin/report/export', [AdminController::class, 'export'])->name('admin.report.export');


    // Approve Routed
    Route::post('/admin/application/{application}/approve', [AdminController::class, 'approve'])->middleware(['role:admin'])->name('admin.application.approve');
    Route::post('/admin/applications/approve-all', [AdminController::class, 'approveAll'])->middleware(['role:admin']);
    Route::post('/admin/application/{application}/reject', [AdminController::class, 'reject'])->middleware(['role:admin'])->name('admin.application.reject');
    Route::post('/admin/applications/reject-all', [AdminController::class, 'rejectAll'])->middleware(['role:admin']);

    // Bills routespaymet
    Route::post('/admin/bill/{application}/processed', [AdminController::class, 'payment'])->middleware(['role:admin'])->name('admin.bill.approve');
    Route::post('/admin/bill/paymet-all', [AdminController::class, 'paymetAll'])->middleware(['role:admin']);
    Route::post('/admin/bill/{application}/reject', [AdminController::class, 'reject'])->middleware(['role:admin'])->name('admin.bill.reject');
    Route::post('/admin/bill/reject-all', [AdminController::class, 'rejectAllBill'])->middleware(['role:admin']);


    Route::get('/admin/application/{application}', [AdminController::class, 'show'])->middleware(['role:admin'])->name('applications.show');
    Route::get('/admin/bill/{application}', [AdminController::class, 'billShow'])->middleware(['role:admin'])->name('bill.show');
    Route::put('/application/{application}', [AdminController::class, 'update'])->middleware(['role:admin'])->name('applications.update');
    Route::delete('/applications/{application}', [AdminController::class, 'destroy'])->middleware(['role:admin'])->name('applications.destroy');






    Route::get('/profile', [ProfileController::class, 'edit'])->middleware(['role:admin'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->middleware(['role:admin'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->middleware(['role:admin'])->name('profile.destroy');

    // Note
    Route::get('/admin/note', [DashboardController::class, 'note'])->middleware(['role:admin'])->name('note.index');
    // Route::get('/admin/notes', [NoteController::class, 'index'])->name('admin.notes.index');
    Route::get('/admin/notes/create', [DashboardController::class, 'create'])->middleware(['role:admin'])->name('admin.notes.create');
    Route::post('/admin/notes', [DashboardController::class, 'store'])->middleware(['role:admin'])->name('admin.notes.store');
    Route::patch('/admin/notes/{note}', [DashboardController::class, 'update'])->middleware(['role:admin'])->name('admin.notes.update');
    Route::delete('/admin/notes/{note}', [DashboardController::class, 'destroy'])->middleware(['role:admin'])->name('admin.notes.destroy');

    Route::get('/admin/info', [DashboardController::class, 'info'])->middleware(['role:admin'])->name('admin.info.index');
    Route::get('/admin/info/create', [DashboardController::class, 'createInfo'])->middleware(['role:admin'])->name('admin.info.create');
    Route::post('/admin/info/store', [DashboardController::class, 'storeInfo'])->middleware(['role:admin'])->name('admin.info.store');
    Route::put('/admin/info/{info}', [DashboardController::class, 'updateInfo'])->middleware(['role:admin'])->name('admin.info.update');
    Route::delete('/admin/info/{info}', [DashboardController::class, 'destroyInfo'])->middleware(['role:admin'])->name('admin.info.destroy');
});

// Route::get('/ruang-phur-report-form',[DeceasedController::class,'index'])->name('form-fill');

// Form

Route::group(['middleware' => [RoleMiddleware::using('admin')]], function () {});
Route::group(['middleware' => [RoleMiddleware::using('approver')]], function () {});


Route::group([], function () {
    Route::get('/verifier/dashboard', [VerifierController::class, 'dashboard'])->name('verifier.dashboard');
    Route::get('/verifier/application', [VerifierController::class, 'index'])->name('verifier.application');
    Route::get('/verifier/application/{application}', [VerifierController::class, 'show'])->name('verifier.applications.show');
    // routes/web.php

    Route::get('/verifier/report', [VerifierController::class, 'userReport'])->name('verifier.report');
    Route::get('/verifier/export', [VerifierController::class, 'userExport'])->name('verifier.export');


    Route::post('/verifier/applications/verify-all', [VerifierController::class, 'verifyAll']);
    Route::post('/verifier/applications/reject-all', [VerifierController::class, 'rejectAll']);

    Route::post('/verifier/application/{application}/approve', [VerifierController::class, 'verify'])->name('verifier.application.approve');
    Route::post('/verifier/application/{application}/reject', [VerifierController::class, 'reject'])->name('verifier.application.reject');
});



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
Route::get('/application/{id}/view', [ApplicationController::class, 'view'])->name('application.view');
// Route::get('/deceased-tracking', [ApplicationController::class, 'view'])->name('view');
// Route::get('/view-form/{id}', [ApplicationController::class, 'viewApplication']);

// FAQs
Route::get('/application/faqs', [ApplicationController::class, 'faqs'])->name('application.faqs');
Route::get('/application/download', [ApplicationController::class, 'downloads'])->name('application.download');


require __DIR__ . '/auth.php';

Route::get('pages/maps', function () {
    return Inertia::render('Maps', []);
})->name('maps');
