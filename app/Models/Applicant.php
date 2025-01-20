<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
    use HasFactory;
    protected $fillable = [
        'name','mobile', 'district', 'locality', 'bank_name', 'account_no', 'ifsc_code','id_proof','receipt','death_certificate','additional_document',
    ];

    public function applications()
    {
        return $this->hasMany(Application::class);
    }
}

