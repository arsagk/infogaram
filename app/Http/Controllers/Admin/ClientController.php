<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\ClientCollection;
use App\Http\Resources\Admin\PermohonanCollection;
use App\Models\Client;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    private $base_route = null;
    private $is_admin = null;
    private $user = null;
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->base_route = 'staf.';
            $user = request()->user();
            $this->user = $user;
            $role = $user->hasRole('admin');
            $this->is_admin = false;
            if ($role == 'admin') {
                $this->is_admin = true;
                $this->base_route = 'admin.';
            }
            return $next($request);
        });
    }

    public function index()
    {
        $tipe_clients = [
            ['value' => '', 'label' => 'All Client'],
            ['value' => 'Supplier', 'label' => 'Supplier'],
            ['value' => 'Pembeli', 'label' => 'Pembeli'],
        ];

        $clients = Client::query();
        if (request()->has(['sortBy', 'sortDir'])) {
            $clients = $clients->orderBy(request('sortBy'), request('sortDir'));
        }
        $clients = $clients->filter(Request::only('search', 'tipe_client'))
            ->paginate(10)
            ->appends(Request::all());

        $tipeclentOpt = collect($tipe_clients)->filter(function($item){
            return $item['value'] == request('tipe_client','');
        })->first();

        return Inertia::render('Admin/Client/Index', [
            'filters' => Request::all('search', 'kode_client'),
            'clients' => ClientCollection::collection($clients),
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
            'tipeclientOpts' =>$tipe_clients,
            'tipeclientOpt' =>$tipeclentOpt,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $tipe_clients = [
            ['value' => 'Supplier', 'label' => 'Supplier'],
            ['value' => 'Pembeli', 'label' => 'Pembeli'],
        ];

        return Inertia::render('Admin/Client/Create', [
            'tipeclientOpts' =>$tipe_clients,
            'tipeclientOpt' =>$tipe_clients[0],
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated =  request()->validate([
            'nama_client' => ['required'],
            'alamat_client' => ['required'],
            'no_telp' => ['required'],
            'kode_client' => ['nullable'],
            'tipe_client' => ['required'],
            'active' => ['boolean'],
        ]);
        Client::create($validated);
        return to_route($this->base_route . 'clients.index')->with('success', 'Client created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        $tipe_clients = [
            ['value' => 'Supplier', 'label' => 'Supplier'],
            ['value' => 'Pembeli', 'label' => 'Pembeli'],
        ];
        return Inertia::render('Admin/Client/Edit', [
            'client' => $client,
            'tipeclientOpts' =>$tipe_clients,
            'tipeclientOpt' =>['value' => $client->tipe_client, 'label' => ucwords($client->tipe_client)],
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Client $client)
    {
        $validated =  request()->validate([
            'nama_client' => ['required'],
            'alamat_client' => ['required'],
            'no_telp' => ['required'],
            'kode_client' => ['nullable'],
            'tipe_client' => ['required'],
            'active' => ['boolean'],
        ]);
        $client->update(
            $validated
        );

        return Redirect::route($this->base_route . 'clients.index')->with('success', 'Client updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $Client)
    {
        $Client->delete();
        return Redirect::back()->with('success', 'Client deleted.');
    }
}
