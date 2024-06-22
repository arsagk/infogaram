<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\BarangkeluarCollection;
use App\Models\Barangkeluar;
use App\Models\Penjualan;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class BarangkeluarController extends Controller
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

        $barangkeluars = Barangkeluar::query();
        $barangkeluars = $barangkeluars->with(['penjualan','penjualan.client','penjualan.barang']);

        if (request()->has(['sortBy', 'sortDir'])) {
            $barangkeluars = $barangkeluars->orderBy(request('sortBy'), request('sortDir'));
        }
        $barangkeluars = $barangkeluars->filter(Request::only('search', 'satuan'))
            ->paginate(10)
            ->appends(Request::all());


        return Inertia::render('Admin/Barangkeluar/Index', [
            'filters' => Request::all('search', 'kode_barangkeluar'),
            'barangkeluars' => BarangkeluarCollection::collection($barangkeluars),
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $penjualans = Penjualan::with(['client','barang'])->where('used', false)->get();

        return Inertia::render('Admin/Barangkeluar/Create', [
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
            'penjualanOpts' => collect($penjualans)->map(fn ($o, $i) => ['label' => $o->kode_penjualan, 'value' => $o->id,'penjualan'=>$o])->toArray(),
            'penjualanOpt' =>count($penjualans)>0?['value'=>$penjualans[0]->kode_penjualan, 'label'=>$penjualans[0]->kode_penjualan]:[],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated =  request()->validate([
            'penjualan_id' => ['required'],
            'no_daftar' => ['nullable'],
            'jumlah_muatan' => ['required','numeric'],
            'jumlah_keluar' => ['required','numeric'],
            'no_pol' => ['required'],
        ]);
        $barangkeluar = Barangkeluar::create($validated);
        $barangkeluar->penjualan->update(['used'=>true]);
        return to_route($this->base_route . 'barangkeluars.index')->with('success', 'Barangkeluar created.');
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
    public function edit(Barangkeluar $barangkeluar)
    {
        $penjualans = Penjualan::with(['client','barang'])->where('used', true)->get();
        $penjualan = $barangkeluar->penjualan;
        $penjualan->client = $barangkeluar->penjualan->client;
        $penjualan->barang = $barangkeluar->penjualan->barang;
        return Inertia::render('Admin/Barangkeluar/Edit', [
            'barangkeluar' => $barangkeluar,
            'penjualanOpts' => collect($penjualans)->map(fn ($o, $i) => ['label' => $o->kode_penjualan, 'value' => $o->id,'penjualan'=>$o])->toArray(),
            'penjualanOpt' =>$penjualan?['value'=>$penjualan->id, 'label'=>$penjualan->kode_penjualan,'penjualan'=>$penjualan]:[],
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Barangkeluar $barangkeluar)
    {
        $validated =  request()->validate([
            'penjualan_id' => ['required'],
            'no_daftar' => ['nullable'],
            'jumlah_muatan' => ['required','numeric'],
            'jumlah_keluar' => ['required','numeric'],
            'no_pol' => ['required'],
         ]);
        $barangkeluar->update(
            $validated
        );

        return Redirect::route($this->base_route . 'barangkeluars.index')->with('success', 'Barangkeluar updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Barangkeluar $Barangkeluar)
    {
        $Barangkeluar->delete();
        return Redirect::back()->with('success', 'Barangkeluar deleted.');
    }
}
