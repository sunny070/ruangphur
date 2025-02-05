<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Applicant extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'mobile', 'district_id', 'locality',
    'bank_name', 'account_no', 'ifsc_code', 'relation',
    'id_proof', 'receipt', 'death_certificate', 'additional_document',];

    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    public function district(): BelongsTo
    {
       return $this->belongsTo(District::class,'district');
    }
}

