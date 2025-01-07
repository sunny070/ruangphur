<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{

    public function showLoginForm()
    {
        return Inertia::render('Auth/Login');  // This would render a Vue component for the login form (if you're using Inertia.js)
    }
    public function login(Request $request)
    {
        // Validate input to ensure 'email' and 'password' are provided
        $request->validate([
            'email' => 'required|email',  // Ensuring the email format is valid
            'password' => 'required'
        ]);

        // Fetch the email from the request
        $email = $request->email;

        // Find the user by the email
        $user = User::where('email', $email)->first();

        // Check if the user exists and if the password is correct
        if (!$user || !Hash::check($request->password, $user->password)) {
            return back()->with('error', 'Invalid credentials.');
        }

        // Log the user in
        Auth::login($user);

        // Redirect based on the user's role
        if ($user->hasRole('admin')) {
            return redirect()->route('dashboard');
        } elseif ($user->hasRole('approver')) {
            return redirect()->route('approver.dashboard');
        } elseif ($user->hasRole('verifier')) {
            return redirect()->route('verifier.dashboard');
        } elseif ($user->hasRole('user')) {
            return Inertia::render('Applicant/Index');
        }

        // If no role is found, return an error
        return back()->with('error', 'No role assigned to this user.');
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('login');
    }
}
