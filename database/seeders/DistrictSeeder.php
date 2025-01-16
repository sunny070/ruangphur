<?php

namespace Database\Seeders;

use App\Models\District;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        District::truncate();
    $districts = [
      [
        'name' => 'Aizawl',
        'district_code' => '01',
        
      ],
      [
        'name' => 'Kolasib',
        'district_code' => '05',
        
      ],
      [
        'name' => 'Lawngtlai',
        'district_code' => '07',
        
      ],
      [
        'name' => 'Lunglei',
        'district_code' => '02',
        
      ],
      [
        'name' => 'Mamit',
        'district_code' => '08',
        
      ],
      [
        'name' => 'Siaha',
        'district_code' => '03',
        
      ],
      [
        'name' => 'Serchhip',
        'district_code' => '06',
        
      ],
      [
        'name' => 'Champhai',
        'district_code' => '04',
        
      ],
      [
        'name' => 'Hnahthial',
        'district_code' => '11',
      ],
      [
        'name' => 'Khawzawl',
        'district_code' => '10',
      ],
      [
        'name' => 'Saitual',
        'district_code' => '09',
      ]
    ];
    foreach ($districts as $district) {
      District::create($district);
    }
    }
}
