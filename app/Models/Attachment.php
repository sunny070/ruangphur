<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    protected $fillable = [
        'application_id',
        'id_proof',
        'receipt',
        'death_certificate',
        'additional_document',
    ];

    public function application()
{
    return $this->belongsTo(Application::class);
}
}
