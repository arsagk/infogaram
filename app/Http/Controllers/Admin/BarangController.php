<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\BarangCollection;
use App\Http\Resources\Admin\PermohonanCollection;
use App\Models\Barang;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class BarangController extends Controller
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
        $satuans = [
            ['value' => '', 'label' => 'All Barang'],
            ['value' => 'kg', 'label' => 'kg'],
            ['value' => 'kwintal', 'label' => 'kwintal'],
        ];

        $barangs = Barang::query();
        if (request()->has(['sortBy', 'sortDir'])) {
            $barangs = $barangs->orderBy(request('sortBy'), request('sortDir'));
        }
        $barangs = $barangs->filter(Request::only('search', 'satuan'))
            ->paginate(10)
            ->appends(Request::all());

        $satuanOpt = collect($satuans)->filter(function($item){
            return $item['value'] === request('satuan','');
        })->first();

        return Inertia::render('Admin/Barang/Index', [
            'filters' => Request::all('search', 'kode_barang'),
            'barangs' => BarangCollection::collection($barangs),
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
            'satuanOpts' =>$satuans,
            'satuanOpt' =>$satuanOpt,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $satuans = [
            ['value' => 'kg', 'label' => 'kg'],
            ['value' => 'kwintal', 'label' => 'kwintal'],
        ];

        return Inertia::render('Admin/Barang/Create', [
            'satuanOpts' =>$satuans,
            'satuanOpt' =>$satuans[0],
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
            'nama_barang' => ['nullable'],
            'kode_barang' => ['required', 'unique:barangs,kode_barang'],
            // 'harga_beli' => ['required','numeric'],
            // 'harga_jual' => ['required','numeric'],
            // 'stok_barang' => ['required','numeric'],
            'satuan' => ['required'],
        ]);
        Barang::create($validated);
        return to_route($this->base_route . 'barangs.index')->with('success', 'Barang created.');
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
    public function edit(Barang $barang)
    {
        $satuans = [
            ['value' => 'kg', 'label' => 'kg'],
            ['value' => 'kwintal', 'label' => 'kwintal'],
        ];
        return Inertia::render('Admin/Barang/Edit', [
            'barang' => $barang,
            'satuanOpts' =>$satuans,
            'satuanOpt' =>['value' => $barang->satuan, 'label' => ucwords($barang->satuan)],
            'is_admin' => $this->is_admin,
            'base_route' => $this->base_route,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Barang $barang)
    {
        $validated =  request()->validate([
            'nama_barang' => ['required'],
            'kode_barang' => ['required', Rule::unique(Barang::class)->ignore($barang->id)],
            // 'harga_beli' => ['required','numeric'],
            // 'harga_jual' => ['required','numeric'],
            // 'stok_barang' => ['required','numeric'],
            'satuan' => ['required'],
        ]);
        $barang->update(
            $validated
        );

        return Redirect::route($this->base_route . 'barangs.index')->with('success', 'Barang updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Barang $Barang)
    {
        $Barang->delete();
        return Redirect::back()->with('success', 'Barang deleted.');
    }
}
