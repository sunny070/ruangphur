<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    protected $fillable=[
        'id_proof','receipt','death_certificate','additional_document',
    ];
}
