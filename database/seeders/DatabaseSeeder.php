<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(50)->create();
        $role = Role::create(['name' => 'admin']);
        $role1 = Role::create(['name' => 'staf']);
        $role2 = Role::create(['name' => 'pimpinan']);
        $role3 = Role::create(['name' => 'user']);

        $user = User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
        ]);
        $user->assignRole($role);
        $user = User::factory()->create([
            'name' => 'Staf1',
            'email' => 'staf1@example.com',
        ]);
        $user->assignRole($role1);
        $user = User::factory()->create([
            'name' => 'Staf2',
            'email' => 'staf2@example.com',
        ]);
        $user->assignRole($role1);
        $user = User::factory()->create([
            'name' => 'Pimpinan',
            'email' => 'pimpinan@example.com',
        ]);
        $user->assignRole($role2);
        $user = User::factory()->create([
            'name' => 'User1',
            'email' => 'user1@example.com',
        ]);
        $user->assignRole($role3);
        $user = User::factory()->create([
            'name' => 'User2',
            'email' => 'user2@example.com',
        ]);
        $user->assignRole($role3);
    }
}
