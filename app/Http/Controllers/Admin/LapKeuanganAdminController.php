<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Akun;
use App\Models\Jurnalumum;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;

class LapKeuanganAdminController extends Controller
{
    private function getPeriodTimes($period = 'today')
    {
        $dt1 = Carbon::now();
        $dt2 = Carbon::now();
        $dt3 = Carbon::now()->subDays(7);
        $dt4 = Carbon::now();
        $dt5 = Carbon::now()->setDay(1);
        $dt6 = Carbon::now();
        $dt7 = Carbon::now()->setMonth(1)->setDay(1);
        $dt8 = Carbon::now();
        $periods = [
            'today' => [$dt1->setTime(0, 0, 1)->format('Y-m-d H:i:s'), $dt2->setTime(24, 0, 0)->format('Y-m-d H:i:s')],
            'this_week' => [$dt3->setTime(0, 0, 1)->format('Y-m-d H:i:s'), $dt4->setTime(24, 0, 0)->format('Y-m-d H:i:s')],
            'this_month' => [$dt5->setTime(0, 0, 1)->format('Y-m-d H:i:s'), $dt6->setTime(24, 0, 0)->format('Y-m-d H:i:s')],
            'this_year' => [$dt7->setTime(0, 0, 1)->format('Y-m-d H:i:s'), $dt8->setTime(24, 0, 0)->format('Y-m-d H:i:s')],
        ];
        if (key_exists($period, $periods)) {
            return $periods[$period];
        }
        return $periods['today'];
    }
    public function bukuBesar()
    {
        $akuns = Akun::all();
        $media = request('media', 'screen');

        // ->selectRaw('price * ? as price_with_tax', [1.0825])
        // ->selectRaw('akuns.kode_akun,akuns.nama_akun,if(jenisakuns.kode_jenisakun=1 or jenisakuns.kode_jenisakun=5,
        // if(sum(debet)>sum(kredit),sum(debet)-sum(kredit),sum(kredit)-sum(debet)),0) as debet,
        // if(jenisakuns.kode_jenisakun >1 and jenisakuns.kode_jenisakun<5,
        // if(sum(debet)>sum(kredit),sum(debet)-sum(kredit),sum(kredit)-sum(debet)),0) as kredit')
        $period_opts = [
            ['value' => 'today', 'label' => 'Hari ini'],
            ['value' => 'this_week', 'label' => 'Minggu ini'],
            ['value' => 'this_month', 'label' => 'Bulan ini'],
            ['value' => 'this_year', 'label' => 'Tahun ini'],
        ];
        $period = request('period', 'this_year');
        $periods = $this->getPeriodTimes($period);

        $akun_id = request('akun_id', 1);
        $page = request('page', 1);
        $pre = Jurnalumum::whereRaw('YEAR(jurnalumums.created_at)=?', Carbon::now()->year)
            ->where('jurnalumums.akun_id', $akun_id)
            ->whereRaw('jurnalumums.debet+jurnalumums.kredit>0')
            ->whereRaw('jurnalumums.created_at >= ? and jurnalumums.created_at <= ?',  [$periods])
            ->selectRaw('jurnalumums.id, jurnalumums.created_at, jenisakuns.kode_jenisakun, akuns.kode_akun,akuns.nama_akun,jurnalumums.uraian, jurnalumums.debet, jurnalumums.kredit')
            ->join('akuns', 'jurnalumums.akun_id', 'akuns.id')
            ->join('kelompokakuns', 'akuns.kelompokakun_id', 'kelompokakuns.id')
            ->join('jenisakuns', 'kelompokakuns.jenisakun_id', 'jenisakuns.id')
            ->orderBy('jurnalumums.id', 'asc');

        $result = $pre->simplePaginate(10)->withQueryString();

        $saldo = 0;
        $prev_saldo = 0;
        if (count($result) > 0) {
            $prev_q = Jurnalumum::whereRaw('YEAR(jurnalumums.created_at)=?', Carbon::now()->year)
                ->where('jurnalumums.akun_id', $akun_id)
                ->whereRaw('jurnalumums.created_at < ?',  [Carbon::parse($result[0]->created_at)->format('Y-m-d H:i:s')])->selectRaw('if(jenisakuns.kode_jenisakun>1 and jenisakuns.kode_jenisakun<5,
            sum(kredit)-sum(debet),sum(debet)-sum(kredit)) as saldo')
                ->join('akuns', 'jurnalumums.akun_id', 'akuns.id')
                ->join('kelompokakuns', 'akuns.kelompokakun_id', 'kelompokakuns.id')
                ->join('jenisakuns', 'kelompokakuns.jenisakun_id', 'jenisakuns.id')
                ->groupBy('jenisakuns.kode_jenisakun')
                ->first();
            if ($prev_q) {
                $prev_saldo = $prev_q->saldo;
            }
        }
        $saldo = $prev_saldo;

        for ($i = 0; $i < count($result); $i++) {
            $value = $result[$i];
            if ($value->kode_jenisakun > 1 && $value->kode_jenisakun < 5) {
                $saldo += ($value->kredit - $value->debet);
            } else {
                $saldo += ($value->debet - $value->kredit);
            }
            $result[$i]->nourut = ($page - 1) * 10 + $i + 1;
            $result[$i]->tanggal = Carbon::parse($value->created_at)->format('d-m-Y');
            $result[$i]->saldo = number_format($saldo);
            $value->debet = number_format($value->debet);
            $value->kredit = number_format($value->kredit);
        }

        if ($media == 'print') {
            $tanggal = Carbon::now()->format('d M Y');
            $pdf = Pdf::loadView('pdf.lapBukubesar', [
                'media' => $media,
                'judul_lap' => 'BUKU BESAR',
                'bukubesars' => $result,
                'akunopts' => collect($akuns)->map(fn ($o) => ['label' => $o->nama_akun, 'value' => $o->id])->toArray(),
                'periodOpts' => $period_opts,
                'akun_id' => $akun_id,
                'period' => $period,
                'tanggal' => $tanggal,
            ])->setPaper(array(0, 0, 609.4488, 935.433), 'portrait');
            return 'data:application/pdf;base64,' . base64_encode($pdf->stream());
        }
        return Inertia::render(
            'Admin/Informasi/Keuangan/BukuBesar',
            [
                'media' => $media,
                'bukubesars' => $result,
                'akunopts' => collect($akuns)->map(fn ($o) => ['label' => $o->nama_akun, 'value' => $o->id])->toArray(),
                'periodOpts' => $period_opts,
                'akun_id' => $akun_id,
                'period' => $period,
            ]
        );
    }
    public function neraca()
    {
        $media = request('media', 'screen');
        $year_opts = [];
        $cyear = Carbon::now()->year;
        $year = request('year', $cyear);

        for ($i = 0; $i < 5; $i++) {
            array_push($year_opts, ['value' => ($cyear - $i), 'label' => ($cyear - $i)]);
        }
        $pre = Jurnalumum::whereRaw('YEAR(jurnalumums.created_at)=?', $year)
            ->selectRaw('akuns.kode_akun, akuns.nama_akun, if(jenisakuns.kode_jenisakun=1 or jenisakuns.kode_jenisakun=5,
            sum(debet)-sum(kredit),0) as debet,
            if(jenisakuns.kode_jenisakun >1 and jenisakuns.kode_jenisakun<5,
            sum(kredit)-sum(debet),0) as kredit')
            ->join('akuns', 'jurnalumums.akun_id', 'akuns.id')
            ->join('kelompokakuns', 'akuns.kelompokakun_id', 'kelompokakuns.id')
            ->join('jenisakuns', 'kelompokakuns.jenisakun_id', 'jenisakuns.id')
            ->orderBy('akuns.kode_akun')
            ->groupBy('akuns.kode_akun')
            ->groupBy('akuns.nama_akun');
        $result = $pre->get();
        $tot_debet = 0;
        $tot_kredit = 0;
        for ($i = 0; $i < count($result); $i++) {
            $value = $result[$i];
            $tot_debet += $value->debet;
            $tot_kredit += $value->kredit;
            $value->debet = number_format($value->debet);
            $value->kredit = number_format($value->kredit);
        }
        if ($media == 'print') {
            $tanggal = Carbon::now()->format('d M Y');
            $pdf = Pdf::loadView('pdf.lapNeraca', [
                'judul_lap' => 'NERACA',
                'media' => $media,
                'neracas' => $result,
                'totDebet' => number_format($tot_debet),
                'totKredit' => number_format($tot_kredit),
                'yearOpts' => $year_opts,
                'year' => $year,
                'tanggal' => $tanggal,
            ])->setPaper(array(0, 0, 609.4488, 935.433), 'portrait');
            return 'data:application/pdf;base64,' . base64_encode($pdf->stream());
        }

        return Inertia::render(
            'Admin/Informasi/Keuangan/Neraca',
            [
                'neracas' => $result,
                'totDebet' => number_format($tot_debet),
                'totKredit' => number_format($tot_kredit),
                'yearOpts' => $year_opts,
                'year' => $year,
            ]
        );
    }
}
