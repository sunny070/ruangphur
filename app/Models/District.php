<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class District extends Model
{
    use HasFactory;

    protected $fillable = [
      
      'name',
    ];
  
    // public function constituency()
    // {
    //   return $this->hasMany(Constituency::class);
    // }

    // public function deceased():HasMany
    // {
    //   return $this->hasMany(Deceased::class);
    // }

    public function constituency()
    {
        return $this->hasMany(Constituency::class, 'district_id');
    }

    public function deceased(): HasMany
    {
        return $this->hasMany(Deceased::class, 'district');
    }

    

    
}
