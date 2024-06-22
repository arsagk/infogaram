<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserApiController extends Controller
{
    public function index()
    {
        $users = User::query();
        $users = $users->orderBy('id','desc');
        // $users = $users->skip(0)->take(10)->get();
        $users = $users->simplePaginate(10);

       return response()->json($users,200);

    }
}
