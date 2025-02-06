<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Deceased extends Model
{
    use HasFactory;

    protected $fillable = [
         'name','relative_id', 'relative_name', 'dob', 'gender',
        'district_id', 'locality', 'constituency_id', 'time_of_death', 'place_of_death',
    ];

    public function district(): BelongsTo
    {
       return $this->belongsTo(District::class);
    }
    public function constituency(): BelongsTo
    {
       return $this->belongsTo(Constituency::class);
    }

    public function relative():BelongsTo
    {
        return  $this->belongsTo(Relative::class);
    }

}
