<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transport extends Model
{
    use HasFactory;
    protected $fillable = [
        'deceased_id', 'source_district', 'source_locality', 'destination_district', 
        'destination_locality', 'distance', 'vehicle_number', 'driver_name', 
        'driver_phone', 'vehicle_owner', 'transport_cost',
    ];
}
