<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DeceasedController extends Controller
{
    public function index()
    {
        return inertia('Deceased/Create');
    }
}
