<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $fillable = [
        'applicant_id', 'status', 'application_no',
    ];

    /**
     * Define a relationship with Applicant.
     */
    public function applicant()
    {
        return $this->belongsTo(Applicant::class);
    }
}
