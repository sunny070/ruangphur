<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transport extends Model
{
    use HasFactory;

    
    protected $fillable = [
        'deceased_id', 'source_district', 'source_locality','source_lat', 'source_lng','destination_lat','destination_lng',
        'destination_district', 'destination_locality', 'distance', 
        'vehicle_number', 'driver_name', 
        'driver_phone', 'transport_cost',
    ];

    public function deceased()
    {
        return $this->belongsTo(Deceased::class);
    }

    // public function district(): BelongsTo
    // {
    //    return $this->belongsTo(District::class);
    // }
    public function sourceDistrict(): BelongsTo
    {
        return $this->belongsTo(District::class, 'source_district');
    }

    // Relationship for destination district
    public function destinationDistrict(): BelongsTo
    {
        return $this->belongsTo(District::class, 'destination_district');
    }
}
