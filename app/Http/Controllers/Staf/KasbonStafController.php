<?php

namespace App\Http\Controllers\Staf;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\KasbonCollection;
use App\Models\Akun;
use App\Models\Jurnalumum;
use App\Models\Kasbon;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class KasbonStafController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cuser = request()->user();
        $is_admin = $cuser->hasRole('admin');
        $user_id = request('user_id');
        $user = null;
        $kasbons = Kasbon::query();
        if (request()->has(['sortBy', 'sortDir'])) {
            $kasbons = $kasbons->orderBy(request('sortBy'), request('sortDir'));
        } else {
            $kasbons = $kasbons->orderBy('id', 'desc');
        }
        if ($is_admin) {
            if (request()->has('user_id')) {
                $user_id = request('user_id');
                $user = User::find($user_id);
                $kasbons = $kasbons->where('user_id', request('user_id'));
            }
        } else {
            $kasbons = $kasbons->where('user_id', $cuser->id);
        }
        $kasbons = $kasbons->filter(Request::only('search'))
            ->paginate(10)
            ->appends(Request::all());

        return Inertia::render('Staf/Kasbon/Index', [
            'filters' => Request::all('search'),
            'kasbons' => KasbonCollection::collection($kasbons),
            'isAdmin' => $is_admin,
            'user' => $user ? ['value' => $user->id, 'label' => $user->name] : null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $xstatus_kasbons = [
            ['value' => 'wait_approval', 'label' => 'Waiting Approval'],
            ['value' => 'approved', 'label' => 'Approved', 'isDisabled'],
            ['value' => 'cancelled', 'label' => 'Cancelled', 'isDisabled'],
        ];
        $status_kasbons = [];
        $cuser = request()->user();
        $is_admin = $cuser ? $cuser->hasRole('admin') : false;
        if ($is_admin) {
            array_push($status_kasbons, $xstatus_kasbons[0], $xstatus_kasbons[1]);
        } else {
            array_push($status_kasbons, $xstatus_kasbons[0]);
        }

        return Inertia::render(
            'Staf/Kasbon/Create',
            ['statuskasbonOpts' => $status_kasbons, 'isAdmin' => $is_admin]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated =  request()->validate([
            // 'id' => ['required'],
            // 'user_id' => ['required'],
            'user_id' => [Rule::requiredIf(function () {
                return request()->user()->hasRole('admin');
            })],
            'jumlah_kasbon' => ['required', 'numeric', 'min:1'],
            'jumlah_penggunaan' => ['required', 'numeric'],
            'sisa_penggunaan' => ['required', 'numeric'],
            'keperluan' => ['required'],
            'status_kasbon' => ['required'],
        ]);

        $kasbon = Kasbon::create(
            $validated
        );

        //posting jurnalumum
        if ($kasbon->status_kasbon == 'approved') {
            $akunkredit = Akun::getKodeAkun('kas');
            $akundebet = Akun::getKodeAkun('piutang');
            $uraian = 'Kasbon Approved' . $kasbon->user->name . ' - ' . $kasbon->keperluan;
            $parent_id = $kasbon->id;
            $ju1 = Jurnalumum::create([
                'uraian' => $uraian,
                'akun_id' => $akundebet,
                'debet' => $kasbon->jumlah_kasbon,
                'kredit' => 0,
                'parent_id' => $parent_id
            ]);
            $ju2 = Jurnalumum::create([
                'uraian' => $uraian,
                'akun_id' => $akunkredit,
                'debet' => 0,
                'kredit' => $kasbon->jumlah_kasbon,
                'parent_id' => $parent_id
            ]);
            $ids = [$ju1->id, $ju2->id];
            $kasbon->jurnalumums()->attach($ids);
        }

        return to_route('staf.transaksi.kasbons.index')->with('success', 'Kasbon created.');
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
    public function edit(Kasbon $kasbon)
    {
        $statusksb = $kasbon->status_kasbon;
        $xstatus_kasbons = [
            ['value' => 'wait_approval', 'label' => 'Waiting Approval'],
            ['value' => 'approved', 'label' => 'Approved', 'isDisabled'],
            ['value' => 'cancelled', 'label' => 'Cancelled', 'isDisabled'],
        ];
        $status_kasbons = [];
        if ($statusksb == 'wait_approval') {
            array_push($status_kasbons, $xstatus_kasbons[1]);
        } elseif ($statusksb == 'approved' & $kasbon->sisa_penggunaan == $kasbon->jumlah_kasbon) {
            array_push($status_kasbons, $xstatus_kasbons[2]);
        }
        $kasbon->user = $kasbon->user;
        return Inertia::render('Staf/Kasbon/Edit', [
            'kasbon' => $kasbon,
            'statuskasbonOpts' => $status_kasbons,
            'statuskasbonOpt' => null,
            // 'statuskasbonOpt' => collect($status_kasbons)->filter(function ($v) use ($kasbon) {
            // return $v['value'] == $kasbon->status_kasbon;
            // })->first(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kasbon $kasbon)
    {
        $validated =  request()->validate([
            // 'id' => ['required'],
            'jumlah_kasbon' => ['required', 'numeric'],
            'jumlah_penggunaan' => ['required', 'numeric'],
            'sisa_penggunaan' => ['required', 'numeric'],
            'keperluan' => ['required'],
            'status_kasbon' => ['required'],
        ]);

        $kasbon->update($validated);
        //posting jurnalumum
        if ($kasbon->status_kasbon == 'approved') {
            $akunkredit = Akun::getKodeAkun('kas');
            $akundebet = Akun::getKodeAkun('piutang');
            $uraian = 'Kasbon Approved, ' . $kasbon->user->name . ' - ' . $kasbon->keperluan;
            $parent_id = $kasbon->id;
            $ju1 = Jurnalumum::create([
                'uraian' => $uraian,
                'akun_id' => $akundebet,
                'debet' => $kasbon->jumlah_kasbon,
                'kredit' => 0,
                'parent_id' => $parent_id
            ]);
            $ju2 = Jurnalumum::create([
                'uraian' => $uraian,
                'akun_id' => $akunkredit,
                'debet' => 0,
                'kredit' => $kasbon->jumlah_kasbon,
                'parent_id' => $parent_id
            ]);
            $ids = [$ju1->id, $ju2->id];
            $kasbon->jurnalumums()->attach($ids);
        } elseif ($kasbon->status_kasbon == 'cancelled') {
            $akundebet = Akun::getKodeAkun('kas');
            $akunkredit = Akun::getKodeAkun('piutang');
            $uraian = 'Kasbon Cancelled, ' . $kasbon->user->name . ' - ' . $kasbon->keperluan;
            $parent_id = $kasbon->id;
            $ju1 = Jurnalumum::create([
                'uraian' => $uraian,
                'akun_id' => $akundebet,
                'debet' => $kasbon->jumlah_kasbon,
                'kredit' => 0,
                'parent_id' => $parent_id
            ]);
            $ju2 = Jurnalumum::create([
                'uraian' => $uraian,
                'akun_id' => $akunkredit,
                'debet' => 0,
                'kredit' => $kasbon->jumlah_kasbon,
                'parent_id' => $parent_id
            ]);
            $ids = [$ju1->id, $ju2->id];
            $kasbon->jurnalumums()->attach($ids);
        }


        return to_route('staf.transaksi.kasbons.index')->with('success', 'Kasbon Updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kasbon $kasbon)
    {
        $kasbon->delete();
        return Redirect::back()->with('success', 'Jenis Permohonan deleted.');
    }
}
