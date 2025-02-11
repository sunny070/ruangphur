<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'content',
        'created_by',
        'status',

    ];

    public function author()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
