<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AssemblyConstituency extends Model
{
    public function district()
    {
      return $this->belongsTo(District::class,'district_id');
    }
}
