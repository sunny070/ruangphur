<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class District extends Model
{
    use HasFactory;

    protected $fillable = [
      
      'name',
    ];
  
    

    public function constituency()
    {
        return $this->hasMany(Constituency::class, 'district_id');
    }

    public function deceased(): HasMany
    {
        return $this->hasMany(Deceased::class, 'district');
    }
    
    // public function user(): HasMany
    // {
    //     return $this->hasMany(User::class);
    // }
    public function users(): BelongsToMany
{
    return $this->belongsToMany(User::class, 'district_user');
}

    
    public function applicant(): HasMany
    {
        return $this->hasMany(Applicant::class);
    }


    

    
}
