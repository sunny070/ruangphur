<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $fillable = [
        'applicant_id', 'status', 'application_no', 'verified_at', 
        'processing_at', 'processed_at'
    ];

    public function transport()
    {
        return $this->hasOneThrough(
            Transport::class,
            Deceased::class,
            'application_id', // Foreign key on the `deceaseds` table
            'deceased_id',    // Foreign key on the `transports` table
            'id',             // Local key on the `applications` table
            'id'              // Local key on the `deceaseds` table
        );
    }

    public function applicant()
    {
        return $this->belongsTo(Applicant::class);
    }
    public function deceased()
    {
        return $this->hasOne(Deceased::class);
    }

    // public function transport()
    // {
    //     return $this->hasOneThrough(Transport::class, Deceased::class, 'application_id', 'deceased_id');
    // }
}
