<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RelativeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $relatives = ['s/o', 'f/o', 'w/o', 'd/o', 'c/o'];

        foreach ($relatives as $relative) {
            DB::table('relatives')->insert([
              // Change this based on actual deceased IDs
                'name' => $relative,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
