<?php

use App\Models\Application;
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
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\Applicant::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(\App\Models\Deceased::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(\App\Models\Transport::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(\App\Models\Attachment::class)->constrained()->onDelete('cascade');
            $table->string('status')->nullable();
            $table->string('application_no')->unique();
            $table->timestamp('verified_at')->nullable();
            $table->timestamp('approved_at')->nullable();
            $table->timestamp('processed_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applications');
    }
};
