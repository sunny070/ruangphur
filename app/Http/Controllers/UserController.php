<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\User;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    //
    public function index(Request $request)
    {
        $search = $request->get('search');

        $users = User::query()
            ->with(['roles', 'districts']) // Eager load 'district' relationship
            ->when($search, function (Builder $builder) use ($search) {
                $builder->where(function ($query) use ($search) {
                    $query->where('name', 'like', '%' . $search . '%')
                        ->orWhere('email', 'like', '%' . $search . '%');
                });
            })
            ->simplePaginate();

        return Inertia::render('User/Index', [
            'users' => $users,
            'search' => $search,
        ]);
    }


    public function create()
    {
        $roles = Role::all();

        return Inertia::render('User/Create', [
            'roles' => $roles,
            'districts' => District::all(),
        ]);
    }

    public function store(Request $request)
    {

        // $validatedData = $request->validate([
        //     'name' => 'required',
        //     'email' => 'required|unique:users',
        //     'phone' => 'required|digits:10|unique:users',
        //     'password' => 'required|min:6|confirmed',
        //     'district_id' => 'required|array',
        //     'district_id.*' => 'exists:districts,id'
        // ]);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|unique:users,phone|max:10',
            'email' => 'required|email|unique:users,email',
            'roles' => 'required|array',
            'districts' => 'required|array', // Validate multiple districts
            'password' => 'required|string|min:6|confirmed',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'phone' => $validated['phone'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
        ]);

        // $user = User::create($validatedData);
        // $user->districts()->sync($validatedData['district_id']);
        $user->districts()->sync($validated['districts']);
        $roleIds = array_column($request->input('roles'), 'id');
        // $data = User::query()->create($validatedData);
        $user->roles()->sync($roleIds);

        return redirect()->route('user.index')->with('success', 'User created successfully.');
    }

    public function edit(Request $request, User $model)
    {
        $data = $model->load(relations: ['roles', 'districts']);
        // dd($data);
        $roles = Role::all();

        return Inertia::render('User/Edit', [
            'data' => $data,
            'roles' => $roles,
            'districts' => District::all(),
        ]);
    }



    public function update(Request $request, User $model)
    {
        $request->validate([
            'name' => 'required',
            'districts' => 'required|array',
            'districts.*' => 'exists:districts,id',
            'email' => [Rule::unique('users', 'email')->ignore($model)],
            'phone' => ['digits:10', Rule::unique('users', 'phone')->ignore($model)],
            'password' => 'nullable|min:6|confirmed', // Allow nullable password
        ]);

        // Update basic fields
        $data = $request->only(['name', 'email', 'phone']);

        // If a new password is provided, hash and include it
        if ($request->filled('password')) {
            $data['password'] = bcrypt($request->input('password'));
        }

        // Update user details
        $model->update($data);

        // Sync districts and roles
        $model->districts()->sync($request->districts); // Sync the districts
        $roleIds = $request->input('roles', []); // Directly use the roles array
        $model->roles()->sync($roleIds); // Sync the roles

        return redirect()->route('user.index')->with('success', 'User Updated successfully.');
    }

    // public function update(Request $request, User $model)
    // {
    //     $request->validate([
    //         'name' => 'required',
    //         'districts' => 'required|array',
    //         'districts.*' => 'exists:districts,id',
    //         'roles' => 'required|array',
    //         'email' => [Rule::unique('users', 'email')->ignore($model)],
    //         'phone' => ['digits:10', Rule::unique('users', 'phone')->ignore($model)],
    //         'password' => 'nullable|min:6|confirmed',
    //     ]);

    //     $data = $request->only(['name', 'email', 'phone']);

    //     if ($request->filled('password')) {
    //         $data['password'] = bcrypt($request->input('password'));
    //     }

    //     $model->update($data);
    //     $model->districts()->sync($request->district_id);

    //     $rolesInput = $request->get('roles', []);
    //     $roleIds = collect($rolesInput)->map(function ($role) {
    //         if (is_array($role) && isset($role['id'])) {
    //             return $role['id'];
    //         } elseif (is_string($role)) {
    //             $roleModel = Role::where('name', $role)->first();
    //             return $roleModel ? $roleModel->id : null;
    //         }
    //         return null;
    //     })->filter();

    //     $model->roles()->sync($roleIds);

    //     return redirect()->route('user.index')->with('success', 'User Updated successfully.');
    // }



    public function destroy(Request $request, User $model)
    {
        $model->delete();
        return redirect()->route('user.index')->with('success', 'User deleted successfully.');
    }
}
