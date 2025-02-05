<?php

use App\Models\District;
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
        Schema::create('applicants', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('mobile');
            $table->foreignIdFor(District::class);

            $table->string('locality');
            $table->string('bank_name');
            $table->string('account_no');
            $table->string('ifsc_code');
            $table->string('relation')->nullable();
             $table->string('id_proof')->nullable();
        $table->string('receipt')->nullable();
        $table->string('death_certificate')->nullable();
        $table->string('additional_document')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applicants');
    }
};
