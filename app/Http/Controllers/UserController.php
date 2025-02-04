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
     public function index(Request $request){

        $search = $request->get('search');


        $users = User::query()
            ->with('roles')
            ->when($search, function (Builder $builder) use ($search) {
                $builder->where(function ($query) use ($search) {
                    $query->where('name', 'like', '%' . $search . '%')
                        ->orWhere('email', 'like', '%' . $search . '%');
                        
                });
            })
            ->simplePaginate();

        return Inertia::render('User/Index',[
            'users' => $users,
            'search' => $search,
        ]);
    }

    public function create(){
        $roles = Role::all();
        
        return Inertia::render('User/Create',[
            'roles' => $roles,
            'districts' => District::all(),
        ]);
    }

    public function store(Request $request){
        // $validatedData = $this->validate($request, [
        //     'name' => 'required',
        //     'email' => 'required|unique:users',
        //     'phone' => 'required|digits:10|unique:users',
        //     'password' => 'required|min:6|confirmed'
        // ]);
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users',
            'phone' => 'required|digits:10|unique:users',
            'password' => 'required|min:6|confirmed',
            'district_id' => 'required'
        ]);
        $roleIds = array_column($request->input('roles'), 'id');
        $data = User::query()->create($validatedData);
        $data->roles()->sync($roleIds);

        return redirect()->route('user.index')->with('success', 'User created successfully.');

    }

    public function edit(Request $request, User $model)
    {
        $data = $model->load(relations: ['roles']);
        $roles = Role::all();

        return Inertia::render('User/Edit', [
            'data' => $data,
            'roles' => $roles
        ]);
    }

//     public function update(Request $request, User $model)
//     {
// //        dd($request);
//         // $this->validate($request, [
//         //     'name' => 'required',
//         //     'email' => [Rule::unique('users', 'email')->ignore($model)],
//         //     'mobile' => ['digits:10', Rule::unique('users', 'mobile')->ignore($model)],
//         //     'password' => 'min:6|confirmed'
//         // ]);
//         $request->validate([
//             'name' => 'required',
//             'email' => [Rule::unique('users', 'email')->ignore($model)],
//             'mobile' => ['digits:10', Rule::unique('users', 'mobile')->ignore($model)],
//             'password' => 'nullable|min:6|confirmed', // Allow nullable password
//         ]);
//         $model->update($request->only($model->getFillable()));
//         // Determine the format of the roles and extract role IDs
//         $rolesInput = $request->get('roles', []);
//         $roleIds = collect($rolesInput)->map(function ($role) {
//             if (is_array($role) && isset($role['id'])) {
//                 // Role is an array with an 'id'
//                 return $role['id'];
//             } elseif (is_string($role)) {
//                 // Role is a string (assumes role name)
//                 // Fetch the role ID from the database
//                 $roleModel = Role::where('name', $role)->first();
//                 return $roleModel ? $roleModel->id : null;
//             }
//             return null;
//         })->filter(); // Remove null values

//         // Sync the roles with the user
//         $model->roles()->sync($roleIds);
//         return redirect()->route('user.index')->with('success', 'User Updated successfully.');
//     }


public function update(Request $request, User $model)
{
    // Validate the request
    $request->validate([
        'name' => 'required',
        'district_id' => 'required',
        'email' => [Rule::unique('users', 'email')->ignore($model)],
        'phone' => ['digits:10', Rule::unique('users', 'phone')->ignore($model)],
        'password' => 'nullable|min:6|confirmed', // Allow nullable password
    ]);

    // Update user fields
    $data = $request->only(['name', 'email', 'phone']);
    
    // Check if password is provided and add it to the update data
    if ($request->filled('password')) {
        $data['password'] = bcrypt($request->input('password'));
    }

    // Update the user
    $model->update($data);

    // Determine the format of the roles and extract role IDs
    $rolesInput = $request->get('roles', []);
    $roleIds = collect($rolesInput)->map(function ($role) {
        if (is_array($role) && isset($role['id'])) {
            // Role is an array with an 'id'
            return $role['id'];
        } elseif (is_string($role)) {
            // Role is a string (assumes role name)
            // Fetch the role ID from the database
            $roleModel = Role::where('name', $role)->first();
            return $roleModel ? $roleModel->id : null;
        }
        return null;
    })->filter(); // Remove null values

    // Sync the roles with the user
    $model->roles()->sync($roleIds);

    // Redirect with success message
    return redirect()->route('user.index')->with('success', 'User Updated successfully.');
}





    public function destroy(Request $request, User $model)
    {
        $model->delete();
        return redirect()->route('user.index')->with('success', 'User deleted successfully.');
    }
}
