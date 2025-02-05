<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('deceaseds', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignIdFor(\App\Models\Relative::class);

            $table->string('relative_name');
            $table->string('dob');
            $table->string('gender');
            $table->foreignIdFor(\App\Models\District::class);
            $table->string('locality');
            $table->foreignIdFor(\App\Models\Constituency::class);
            $table->string('time_of_death')->nullable();
            $table->string('place_of_death')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('deceaseds');
    }
};
