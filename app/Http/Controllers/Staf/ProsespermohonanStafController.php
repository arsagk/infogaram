<?php

namespace App\Http\Controllers\Staf;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProsespermohonan;
use App\Http\Resources\Admin\ProsespermohonanCollection;
use App\Http\Resources\Admin\TranspermohonanCollection;
use App\Models\Itemprosesperm;
use App\Models\Prosespermohonan;
use App\Models\Statusprosesperm;
use App\Models\Transpermohonan;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;

class ProsespermohonanStafController extends Controller
{
    public function index()
    {
        $itemprosespermsOpts = Itemprosesperm::all();
        $statusprosesperms = Statusprosesperm::all();
        $itemprosesperm_id = request('itemprosesperm_id') ? request('itemprosesperm_id') : null;
        $statusprosesperm_id = request('statusprosesperm_id') ? request('statusprosesperm_id') : $statusprosesperms[0]->id;
        $transpermohonan_id = request('transpermohonan_id') ? request('transpermohonan_id') : null;
        $transpermohonan = Transpermohonan::find(request()->get('transpermohonan_id'));
        $permohonan = null;
        if ($transpermohonan) {
            $permohonan = $transpermohonan->permohonan;
        }
        $prosespermohonans = Prosespermohonan::query();
        $prosespermohonans = $prosespermohonans
            // ->join('transpermohonans', 'prosespermohonans.transpermohonan_id', 'transpermohonans.id')
            // ->join('permohonans', 'transpermohonans.permohonan_id', 'permohonans.id')
            // ->join('jenishaks', 'permohonans.jenishak_id', 'jenishaks.id')
            // ->join('desas', 'permohonans.desa_id', 'desas.id')
            // ->join('kecamatans', 'desas.kecamatan_id', 'kecamatans.id')
            // ->select('transpermohonans.id', 'prosespermohonans.user_id', 'nama_pelepas', 'nama_penerima', 'atas_nama', 'jenishaks.singkatan', 'nomor_hak', 'persil', 'klas', 'luas_tanah', 'nama_desa', 'nama_kecamatan');
            ->with('statusprosesperms', function ($q) {
                $q->where('active', true);
            })
            ->with('itemprosesperm')
            ->with('transpermohonan.jenispermohonan')
            ->with('transpermohonan.permohonan', function ($query) {
                $query->select('id', 'nama_pelepas', 'nama_penerima', 'atas_nama', 'jenishak_id', 'desa_id', 'nomor_hak', 'persil', 'klas', 'luas_tanah')
                    ->with('users:id,name', 'jenishak')
                    ->with('desa', function ($query) {
                        $query->select('id', 'nama_desa', 'kecamatan_id')->with('kecamatan:id,nama_kecamatan');
                    });
            });
            if($itemprosesperm_id){
                $prosespermohonans = $prosespermohonans->where('itemprosesperm_id', $itemprosesperm_id);
            }

        $prosespermohonans = $prosespermohonans->whereHas('statusprosesperms', function ($query) use ($statusprosesperm_id) {
            $query->where('statusprosesperm_id', '=', $statusprosesperm_id)
                ->where('active', '=', true);
        });
        $prosespermohonans = $prosespermohonans->filter(Request::only('transpermohonan_id'));
        $prosespermohonans = $prosespermohonans->orderBy('id', 'desc')->paginate(10)->appends(request()->all());
        return Inertia::render('Staf/Prosespermohonan/Index', [
            'itemprosespermsOpts' => collect($itemprosespermsOpts)->map(fn ($item) => ['value' => $item['id'], 'label' => $item['nama_itemprosesperm']]),
            'prosespermohonans' => $prosespermohonans,
            'itemprosesperm_id' => $itemprosesperm_id,
            'statusprosesperms' => $statusprosesperms,
            'statusprosesperm_id' => $statusprosesperm_id,
            'permohonan' => $permohonan,
            'transpermohonan_id' => $transpermohonan_id,
            // 'transpermohonan' => Inertia::lazy(fn () => $transpermohonan),
        ]);
    }
    public function byPermohonan()
    {
        $itemprosespermsOpts = Itemprosesperm::all();
        $statusprosesperms = Statusprosesperm::all();
        $itemprosesperm_id = request('itemprosesperm_id') ? request('itemprosesperm_id') : null;
        $statusprosesperm_id = request('statusprosesperm_id') ? request('statusprosesperm_id') : $statusprosesperms[0]->id;
        $transpermohonan_id = request('transpermohonan_id') ? request('transpermohonan_id') : null;
        $transpermohonan = Transpermohonan::find(request()->get('transpermohonan_id'));
        $permohonan = null;
        if ($transpermohonan) {
            $permohonan = $transpermohonan->permohonan;
        }
        $prosespermohonans = Prosespermohonan::query();
        $prosespermohonans = $prosespermohonans
            // ->join('transpermohonans', 'prosespermohonans.transpermohonan_id', 'transpermohonans.id')
            // ->join('permohonans', 'transpermohonans.permohonan_id', 'permohonans.id')
            // ->join('jenishaks', 'permohonans.jenishak_id', 'jenishaks.id')
            // ->join('desas', 'permohonans.desa_id', 'desas.id')
            // ->join('kecamatans', 'desas.kecamatan_id', 'kecamatans.id')
            // ->select('transpermohonans.id', 'prosespermohonans.user_id', 'nama_pelepas', 'nama_penerima', 'atas_nama', 'jenishaks.singkatan', 'nomor_hak', 'persil', 'klas', 'luas_tanah', 'nama_desa', 'nama_kecamatan');
            ->with('itemprosesperm')
            ->with('statusprosesperms', function ($q) {
                $q->where('active', true);
            })
            ->with('transpermohonan.jenispermohonan')
            ->with('transpermohonan.permohonan', function ($query) {
                $query->select('id', 'nama_pelepas', 'nama_penerima', 'atas_nama', 'jenishak_id', 'desa_id', 'nomor_hak', 'persil', 'klas', 'luas_tanah')
                    ->with('users:id,name', 'jenishak')
                    ->with('desa', function ($query) {
                        $query->select('id', 'nama_desa', 'kecamatan_id')->with('kecamatan:id,nama_kecamatan');
                    });
            });
        if($itemprosesperm_id){
            $prosespermohonans = $prosespermohonans->where('itemprosesperm_id', $itemprosesperm_id);
        }
        $prosespermohonans = $prosespermohonans->whereHas('statusprosesperms', function ($query) use ($statusprosesperm_id) {
            $query->where('statusprosesperm_id', '=', $statusprosesperm_id)
                ->where('active', '=', true);
        });
        // $prosespermohonans = $prosespermohonans->filter(Request::only('transpermohonan_id'));
        // if($itemprosesperm_id){
            $prosespermohonans = $prosespermohonans->where('transpermohonan_id', $transpermohonan_id);
        // }
        $prosespermohonans = $prosespermohonans->orderBy('id', 'desc')->orderBy('transpermohonan_id', 'desc')->paginate(10)->appends(request()->all());
        $itmproses[] = ['value'=>'','label'=>'All Proses'];
        for ($i=0; $i < count($itemprosespermsOpts); $i++) {
            $item = $itemprosespermsOpts[$i];
            $itmproses[] = ['value'=>$item['id'],'label'=>$item['nama_itemprosesperm']];
        }
        return Inertia::render('Staf/Prosespermohonan/ByPermohonan', [
            'itemprosespermsOpts' => $itmproses,
            // collect($itemprosespermsOpts)->map(fn ($item) => ['value' => $item['id'], 'label' => $item['nama_itemprosesperm']])->push(['value'=>'','label'=>'Semua Proses']),
            'prosespermohonans' => $prosespermohonans,
            'itemprosesperm_id' => $itemprosesperm_id,
            'statusprosesperms' => $statusprosesperms,
            'statusprosesperm_id' => $statusprosesperm_id,
            'permohonan' => $permohonan,
            'transpermohonan_id' => $transpermohonan_id,
            // 'transpermohonan' => Inertia::lazy(fn () => $transpermohonan),
        ]);
    }

    public function create()
    {
        $user_id = Auth::id();
        $transpermohonan = null;
        $prosespermohonans = null;
        $itemprosesperms = Itemprosesperm::all();
        $statusprosesperms = Statusprosesperm::all();
        if (request()->has('transpermohonan_id')) {
            $rec = Transpermohonan::find(request()->get('transpermohonan_id'));

            if ($rec) {
                $transpermohonan = new TranspermohonanCollection($rec);
            }

            $recs = Prosespermohonan::query();
            $recs = $recs->with('transpermohonan')->with('itemprosesperm')->with('statusprosesperms')->with('user')
                ->where('transpermohonan_id', request('transpermohonan_id'));
            if (request()->has('itemprosesperm_id')) {
                $id = request('itemprosesperm_id');
                $recs = $recs->where(function (Builder $query) use ($id) {
                    $query->where('itemprosesperm_id', $id);
                });
            }
            $recs = $recs->simplePaginate(10)->appends(Request::all());
            //skip(0)->take(100)->get();
            // $rec->appends(Request::all())
            if ($recs) {
                $prosespermohonans = ProsespermohonanCollection::collection($recs);
            }
        }

        $prosesperms = collect($prosespermohonans)->map(function ($prosesperm) use ($user_id) {
            $prosesperm->statusprosesperms->each(
                function ($s) use ($user_id) {
                    $s->canRemove = $s->pivot->user_id == $user_id;
                    $s->user = User::find($s->pivot->user_id);
                }
            );
            return $prosesperm;
        });
        // dd($prosesperms);
        return Inertia::render('Staf/Prosespermohonan/Create', [
            'transpermohonan' => $transpermohonan,
            'itemprosesperms' => collect($itemprosesperms)->map(fn ($o) => ['label' => $o->nama_itemprosesperm, 'value' => $o->id])->prepend(['value' => null, 'label' => 'Semua Kegiatan'])->toArray(),
            'statusprosesperms' => collect($statusprosesperms)->map(fn ($o) => ['label' => $o->nama_statusprosesperm, 'value' => $o->id])->toArray(),
            'prosespermohonans' => $prosesperms,
            // 'transpermohonan' => Inertia::lazy(fn () => $transpermohonan),
        ]);
    }
    public function store(StoreProsespermohonan $request)
    {
        // Rule::unique('prosespermohonans', 'itemprosesperm_id')->where('transpermohonan_id', request('transpermohonan_id'))
        // $validated =  request()->validate([
        //     'transpermohonan_id' => ['required'],
        //     'itemprosesperm_id' => ['required', Rule::unique('prosespermohonans', 'itemprosesperm_id')->where('transpermohonan_id', request('transpermohonan_id'))],
        //     'catatan_prosesperm' => ['nullable'],
        // ]);
        Prosespermohonan::create(
            $request->validated()
        );
        return redirect()->back()->with('success', 'Proses Permohonan created.');
    }
    public function statuspermStore(Request $request, Prosespermohonan $prosespermohonan)
    {


        $validated =  request()->validate([
            'prosespermohonan_id' => ['required'],
            'statusprosesperm_id' => ['required'],
            'catatan_statusprosesperm' => ['nullable'],
            'user_id' => ['nullable'],
        ]);
        $user = auth()->user();
        $validated['user_id'] = $user->id;
        $ids = $prosespermohonan->statusprosesperms()->pluck('statusprosesperm_id');
        if (count($ids) > 0) {
            $prosespermohonan->statusprosesperms()->syncWithPivotValues($ids, ['active' => false]);
        }
        $prosespermohonan->statusprosesperms()->attach($validated['prosespermohonan_id'], $validated);

        // $user->roles()->syncWithPivotValues([1, 2, 3], ['active' => true]);
        // $perosespermohonan = Statusprosesperm::create(
        //     $validated
        // );

        return redirect()->back()->with('success', 'Status Proses Permohonan created.');
    }

    public function statuspermDestroy(Prosespermohonan $prosespermohonan, String $id)
    {
        $prosespermohonan->statusprosesperms()->detach($id);
        return Redirect::back()->with('success', 'Status Permohonan deleted.');
    }
}
