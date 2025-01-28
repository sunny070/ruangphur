<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VerifierController extends Controller
{
    public function index()
    {
        $applications = Application::with(['applicant', 'deceased.district', 'transport']) // Eager load related models
           ->where('status','Pending')
            ->get();

        return Inertia::render('Verifier/Application', [
            'applications' => $applications,
            'flash' => [
                'success' => session('success'),
                'error' => session('error')
            ]
        ]);
    }
}
