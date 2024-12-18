<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deceased extends Model
{
    use HasFactory;

    protected $fillable = [
        'application_id', 'name','relative', 'relative_name', 'dob', 'gender', 'mobile',
        'district', 'locality', 'constituency', 'time_of_death', 'place_of_death',
    ];
}
