<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\PembelianCollection;
use App\Http\Resources\Admin\PermohonanCollection;
use App\Models\Barang;
use App\Models\Client;
use App\Models\Pembelian;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PembelianController extends Controller
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

        $pembelians = Pembelian::query();
        if (request()->has(['sortBy', 'sortDir'])) {
            $pembelians = $pembelians->orderBy(request('sortBy'), request('sortDir'));
        }
        $pembelians = $pembelians->filter(Request::only('search', 'satuan'))
            ->paginate(10)
            ->appends(Request::all());


        return Inertia::render('Admin/Pembelian/Index', [
            'filters' => Request::all('search', 'kode_pembelian'),
            'pembelians' => PembelianCollection::collection($pembelians),
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
        $clients = Client::where('tipe_client','Supplier')->get();
        $barangs = Barang::all();

        return Inertia::render('Admin/Pembelian/Create', [
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
            'kode_pembelian' => ['nullable'],
            'harga_perkg' => ['required','numeric'],
            'ongkos_perkg' => ['required','numeric'],
            'jumlah_pembelian' => ['required','numeric'],
            'jenis_muatan' => ['required'],
        ]);
        Pembelian::create($validated);
        return to_route($this->base_route . 'pembelians.index')->with('success', 'Pembelian created.');
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
    public function edit(Pembelian $pembelian)
    {
        $jenis_muatans = [
            ['value' => 'Curai', 'label' => 'Curai'],
            ['value' => 'Karung', 'label' => 'Karung'],
        ];
        $clients = Client::where('tipe_client','Supplier')->get();
        $barangs = Barang::all();

        return Inertia::render('Admin/Pembelian/Edit', [
            'pembelian' => $pembelian,
            'jenismuatanOpts' =>$jenis_muatans,
            'jenismuatanOpt' =>['value' => $pembelian->jenis_muatan, 'label' => ucwords($pembelian->jenis_muatan)],
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
            'clientOpts' => collect($clients)->map(fn ($o, $i) => ['label' => $o->nama_client, 'value' => $o->id])->toArray(),
            'clientOpt' =>['value' => $pembelian->client_id, 'label' => ucwords($pembelian->client->nama_client)],
            'barangOpts' => collect($barangs)->map(fn ($o, $i) => ['label' => $o->nama_barang, 'value' => $o->id])->toArray(),
            'barangOpt' =>['value' => $pembelian->barang_id, 'label' => ucwords($pembelian->barang->nama_barang)],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Pembelian $pembelian)
    {
        $validated =  request()->validate([
            'client_id' => ['required'],
            'barang_id' => ['required'],
            'kode_pembelian' => ['nullable'],
            'harga_perkg' => ['required','numeric'],
            'ongkos_perkg' => ['required','numeric'],
            'jumlah_pembelian' => ['required','numeric'],
            'jenis_muatan' => ['required'],
         ]);
        $pembelian->update(
            $validated
        );

        return Redirect::route($this->base_route . 'pembelians.index')->with('success', 'Pembelian updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pembelian $Pembelian)
    {
        $Pembelian->delete();
        return Redirect::back()->with('success', 'Pembelian deleted.');
    }
}
