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
        Schema::create('transports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('deceased_id')->constrained()->onDelete('cascade');

            $table->string('source_district');
            $table->string('source_locality');
            $table->string('destination_district');
            $table->string('destination_locality');
            // $table->string('distance');
            $table->string('vehicle_number');
            $table->string('driver_name');
            $table->string('driver_phone');
            $table->string('transport_cost');

            $table->decimal('source_lat', 10, 7);
            $table->decimal('source_lng', 10, 7);
            $table->decimal('destination_lat', 10, 7);
            $table->decimal('destination_lng', 10, 7);
            $table->decimal('distance', 8, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transports');
    }
};
