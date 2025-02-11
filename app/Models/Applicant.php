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
    'bank_name', 'account_no', 'ifsc_code',];

    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    public function district()
    {
       return $this->belongsTo(District::class);
    }
}

