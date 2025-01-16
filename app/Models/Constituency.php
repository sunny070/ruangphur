<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Constituency extends Model
{
    use HasFactory;

    protected $fillable = [
      
      'name',
    ];

    public function district()
    {
      return $this->hasMany(District::class);
    }
}
