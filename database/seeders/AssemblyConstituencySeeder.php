<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AssemblyConstituencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Districts with their respective constituencies
        $districts = [
            'Aizawl' => [
                'Tuivaw', 'Chalfilh', 'Tawi',
                'Aizawl North - I', 'Aizawl North - II', 'Aizawl North - III',
                'Aizawl East - I', 'Aizawl East - II',
                'Aizawl West - I', 'Aizawl West - II', 'Aizawl West - III',
                'Aizawl South - I', 'Aizawl South - II', 'Aizawl South - III'
            ],
            'Lunglei' => [
                'South Tuipui', 'Lunglei North', 'Lunglei East',
                'Lunglei West', 'Lunglei South', 'Thorang', 'West Tuipui'
            ],
            'Serchhip' => ['Serchhip', 'Tuikum', 'Hrangturzo'],
            'Kolasib' => ['Tuirial', 'Kolasib', 'Serlui'],
            'Lawngtlai' => ['Tuichawng', 'Lawngtlai West', 'Lawngtlai East'],
            'Saiha' => ['Saiha', 'Palak'],
            'Champhai' => ['Lengteng', 'Tuichang', 'Champhai North', 'Champhai South', 'East Tuipui'],
            'Mamit' => ['Hachhek', 'Dampa', 'Mamit'],
            'Saitual' => ['Chalfilh', 'Lengteng', 'Tawi Round'],
            'Hnahthial' => ['South Tuipui', 'Lunglei North', 'Lunglei East'],
            'Khawzawl' => ['Lengteng', 'Tuichang', 'Champhai North', 'Hrangturzo', 'Tuichang']
        ];

        foreach ($districts as $districtName => $constituencies) {
            // Insert district
            for ($i = 1; $i <= 11; $i++) {
                echo $i . "<br>";
            }
            $districtId = DB::table('districts')
                ->insertGetId([
                'name' => $districtName,
                'district_code' => $i, // Generate code like "AIZ" for Aizawl
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Insert constituencies for the district
            foreach ($constituencies as $constituency) {
                DB::table('constituencies')->insert([
                    'name' => $constituency,
                    'district_id' => $districtId,
                    'type' => 'ST',
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
