<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\PenjualanCollection;
use App\Models\Barang;
use App\Models\Client;
use App\Models\Penjualan;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PenjualanController extends Controller
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
            $this->base_route = 'staf.transaksi.';
            $user = request()->user();
            $this->user = $user;
            $role = $user->hasRole('admin');
            $this->is_admin = false;
            if ($role == 'admin') {
                $this->is_admin = true;
                $this->base_route = 'admin.transaksi.';
            }
            return $next($request);
        });
    }

    public function index()
    {

        $penjualans = Penjualan::query();
        if (request()->has(['sortBy', 'sortDir'])) {
            $penjualans = $penjualans->orderBy(request('sortBy'), request('sortDir'));
        }
        $penjualans = $penjualans->filter(Request::only('search', 'satuan'))
            ->paginate(10)
            ->appends(Request::all());


        return Inertia::render('Admin/Penjualan/Index', [
            'filters' => Request::all('search', 'kode_penjualan'),
            'penjualans' => PenjualanCollection::collection($penjualans),
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $jenis_muatans = [
            ['value' => 'Curai', 'label' => 'Curai'],
            ['value' => 'Karung', 'label' => 'Karung'],
        ];
        $clients = Client::where('tipe_client','Pembeli')->get();
        $barangs = Barang::all();

        return Inertia::render('Admin/Penjualan/Create', [
            'jenismuatanOpts' =>$jenis_muatans,
            'jenismuatanOpt' =>$jenis_muatans[0],
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
            'clientOpts' => collect($clients)->map(fn ($o, $i) => ['label' => $o->nama_client, 'value' => $o->id])->toArray(),
            'clientOpt' =>$clients[0],
            'barangOpts' => collect($barangs)->map(fn ($o, $i) => ['label' => $o->nama_barang, 'value' => $o->id])->toArray(),
            'barangOpt' =>$barangs[0],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated =  request()->validate([
            'client_id' => ['required'],
            'barang_id' => ['required'],
            'kode_penjualan' => ['nullable'],
            'harga_perkg' => ['required','numeric'],
            'ongkos_perkg' => ['required','numeric'],
            'jumlah_penjualan' => ['required','numeric'],
            'jenis_muatan' => ['required'],
        ]);
        Penjualan::create($validated);
        return to_route($this->base_route . 'penjualans.index')->with('success', 'Penjualan created.');
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
    public function edit(Penjualan $penjualan)
    {
        $jenis_muatans = [
            ['value' => 'Curai', 'label' => 'Curai'],
            ['value' => 'Karung', 'label' => 'Karung'],
        ];
        $clients = Client::where('tipe_client','Pembeli')->get();
        $barangs = Barang::all();

        return Inertia::render('Admin/Penjualan/Edit', [
            'penjualan' => $penjualan,
            'jenismuatanOpts' =>$jenis_muatans,
            'jenismuatanOpt' =>['value' => $penjualan->jenis_muatan, 'label' => ucwords($penjualan->jenis_muatan)],
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
            'clientOpts' => collect($clients)->map(fn ($o, $i) => ['label' => $o->nama_client, 'value' => $o->id])->toArray(),
            'clientOpt' =>['value' => $penjualan->client_id, 'label' => ucwords($penjualan->client->nama_client)],
            'barangOpts' => collect($barangs)->map(fn ($o, $i) => ['label' => $o->nama_barang, 'value' => $o->id])->toArray(),
            'barangOpt' =>['value' => $penjualan->barang_id, 'label' => ucwords($penjualan->barang->nama_barang)],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Penjualan $penjualan)
    {
        $validated =  request()->validate([
            'client_id' => ['required'],
            'barang_id' => ['required'],
            'kode_penjualan' => ['nullable'],
            'harga_perkg' => ['required','numeric'],
            'ongkos_perkg' => ['required','numeric'],
            'jumlah_penjualan' => ['required','numeric'],
            'jenis_muatan' => ['required'],
         ]);
        $penjualan->update(
            $validated
        );

        return Redirect::route($this->base_route . 'penjualans.index')->with('success', 'Penjualan updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Penjualan $Penjualan)
    {
        $Penjualan->delete();
        return Redirect::back()->with('success', 'Penjualan deleted.');
    }
}
