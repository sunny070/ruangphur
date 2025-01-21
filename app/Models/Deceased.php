<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Deceased extends Model
{
    use HasFactory;

    protected $fillable = [
        'application_id', 'name','relative', 'relative_name', 'dob', 'gender',
        'district', 'locality', 'constituency', 'time_of_death', 'place_of_death',
    ];

    public function district(): BelongsTo
    {
       return $this->belongsTo(District::class,'district');
    }
}
