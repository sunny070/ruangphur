<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::query()->upsert([
            ['id' => 1, 'name' => 'admin', 'email' => 'admin@mail.com','phone' => '00001', 'password' => Hash::make('password')],
            ['id' => 2, 'name' => 'verifier', 'email' => 'verifier@mail.com','phone' => '00002', 'password' => Hash::make('password')],
            ['id' => 3, 'name' => 'approver', 'email' => 'approver@mail.com','phone' => '00003', 'password' => Hash::make('password')],
            ['id' => 4, 'name' => 'citizen', 'email' => 'citizen1@mail.com','phone' => '00004', 'password' => Hash::make('password')],
        ], ['id']);

        $admin = User::find(1);
        if ($admin) {
            $admin->assignRole('admin');
        }

        $approver = User::find(2);
        if ($approver) {
            $approver->assignRole('approver');
        }

        $verifier = User::find(3);
        if ($verifier) {
            $verifier->assignRole('verifier');
        }

        $user = User::find(4);
        if ($user) {
            $user->assignRole('user');
        }
    }
}
