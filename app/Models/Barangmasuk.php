<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barangmasuk extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'pembelian_id',
        'jumlah_muatan',
        'jumlah_terima',
        'no_pol',
        'no_daftar',
    ];

        // public function kecamatan()
        // {
        //     return $this->belongsTo(Kecamatan::class);
        // }

        public function scopeFilter($query, array $filters)
        {
            $query->when($filters['search'] ?? null, function ($query, $search) {
                $query->where(function ($query) use ($search) {
                    $query->where('no_pol', 'like', '%' . $search . '%');
                    $query->orWhere('barangmasuk_id', 'like', '%' . $search . '%');
                });
            });
        }

        public static function getKode()
        {
            $now = Carbon::now();
            $year = $now->year;
            $month = $now->month;
            // $date = $now->day;
            // 'SUP2402001'
            $rec = Barangmasuk::select('no_daftar')->whereMonth('created_at', '=', $month)->orderBy('id', 'desc')
                ->skip(0)->take(1)->first();
            return substr($year, 2) . str_pad($month, 2, '0', STR_PAD_LEFT) . str_pad($rec ? (int) substr($rec->no_daftar, 4) + 1 : 1, 3, '0', STR_PAD_LEFT);
        }

        public static function boot()
        {
            parent::boot();
            self::creating(function (Barangmasuk $barangmasuk) {
                $barangmasuk->no_daftar = Barangmasuk::getKode();
            });
            self::updating(function (Barangmasuk $barangmasuk) {
                $barangmasuk->no_daftar = substr($barangmasuk->no_daftar,3);
            });
        }

        public function pembelian()
        {
            return $this->belongsTo(Pembelian::class);
        }


}
