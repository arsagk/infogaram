<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\BarangmasukCollection;
use App\Http\Resources\Admin\PermohonanCollection;
use App\Models\Barang;
use App\Models\Client;
use App\Models\Barangmasuk;
use App\Models\Pembelian;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class BarangmasukController extends Controller
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

        $barangmasuks = Barangmasuk::query();
        $barangmasuks = $barangmasuks->with(['pembelian','pembelian.client','pembelian.barang']);

        if (request()->has(['sortBy', 'sortDir'])) {
            $barangmasuks = $barangmasuks->orderBy(request('sortBy'), request('sortDir'));
        }
        $barangmasuks = $barangmasuks->filter(Request::only('search', 'satuan'))
            ->paginate(10)
            ->appends(Request::all());


        return Inertia::render('Admin/Barangmasuk/Index', [
            'filters' => Request::all('search', 'kode_barangmasuk'),
            'barangmasuks' => BarangmasukCollection::collection($barangmasuks),
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $pembelians = Pembelian::with(['client','barang'])->where('used', false)->get();

        return Inertia::render('Admin/Barangmasuk/Create', [
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
            'pembelianOpts' => collect($pembelians)->map(fn ($o, $i) => ['label' => $o->kode_pembelian, 'value' => $o->id,'pembelian'=>$o])->toArray(),
            'pembelianOpt' =>count($pembelians)>0?['value'=>$pembelians[0]->kode_pembelian, 'label'=>$pembelians[0]->kode_pembelian]:[],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated =  request()->validate([
            'pembelian_id' => ['required'],
            'no_daftar' => ['nullable'],
            'jumlah_muatan' => ['required','numeric'],
            'jumlah_terima' => ['required','numeric'],
            'no_pol' => ['required'],
        ]);
        $barangmasuk = Barangmasuk::create($validated);
        $barangmasuk->pembelian->update(['used'=>true]);
        return to_route($this->base_route . 'barangmasuks.index')->with('success', 'Barangmasuk created.');
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
    public function edit(Barangmasuk $barangmasuk)
    {
        $pembelians = Pembelian::with(['client','barang'])->where('used', true)->get();
        $pembelian = $barangmasuk->pembelian;
        $pembelian->client = $barangmasuk->pembelian->client;
        $pembelian->barang = $barangmasuk->pembelian->barang;
        return Inertia::render('Admin/Barangmasuk/Edit', [
            'barangmasuk' => $barangmasuk,
            'pembelianOpts' => collect($pembelians)->map(fn ($o, $i) => ['label' => $o->kode_pembelian, 'value' => $o->id,'pembelian'=>$o])->toArray(),
            'pembelianOpt' =>$pembelian?['value'=>$pembelian->id, 'label'=>$pembelian->kode_pembelian,'pembelian'=>$pembelian]:[],
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Barangmasuk $barangmasuk)
    {
        $validated =  request()->validate([
            'pembelian_id' => ['required'],
            'no_daftar' => ['nullable'],
            'jumlah_muatan' => ['required','numeric'],
            'jumlah_terima' => ['required','numeric'],
            'no_pol' => ['required'],
         ]);
        $barangmasuk->update(
            $validated
        );

        return Redirect::route($this->base_route . 'barangmasuks.index')->with('success', 'Barangmasuk updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Barangmasuk $Barangmasuk)
    {
        $Barangmasuk->delete();
        return Redirect::back()->with('success', 'Barangmasuk deleted.');
    }
}
