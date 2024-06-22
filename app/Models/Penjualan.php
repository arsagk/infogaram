<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penjualan extends Model
{
    use HasFactory;
    protected $fillable = [
    'id',
    'barang_id',
    'client_id',
    'jumlah_penjualan',
    'harga_perkg',
    'ongkos_perkg',
    'jenis_muatan',
    'lunas',
    'kode_penjualan',
    'used',
];

    // public function kecamatan()
    // {
    //     return $this->belongsTo(Kecamatan::class);
    // }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('barang_id', 'like', '%' . $search . '%');
                $query->orWhere('client_id', 'like', '%' . $search . '%');
            });
        });
    }

    public static function getYear()
    {
        $now = Carbon::now();
        $year = $now->year;
        // $rec = Jurnalumum::select('id')->whereDate('created_at', '=', $now->toDateString())->orderBy('id', 'desc')
        //     ->skip(0)->take(1)->first();
        // return substr($year, 2) . str_pad($month, 2, '0', STR_PAD_LEFT) . str_pad($date, 2, '0', STR_PAD_LEFT) . str_pad($rec ? (int) substr($rec->id, 6) + 1 : 1, 4, '0', STR_PAD_LEFT);
        return $year;
    }


    public static function getKodePenjualan()
    {
        $now = Carbon::now();
        $year = $now->year;
        $month = $now->month;
        // $date = $now->day;
        // 'SUP2402001'
        $rec = Penjualan::select('kode_penjualan')->whereMonth('created_at', '=', $month)->orderBy('id', 'desc')
            ->skip(0)->take(1)->first();
        return substr($year, 2) . str_pad($month, 2, '0', STR_PAD_LEFT) . str_pad($rec ? (int) substr($rec->kode_penjualan, 7) + 1 : 1, 3, '0', STR_PAD_LEFT);
    }

    public static function boot()
    {
        parent::boot();
        self::creating(function (Penjualan $penjualan) {
            $prefix = 'UDM';
            $penjualan->kode_penjualan = $prefix . Penjualan::getKodePenjualan();
        });
        self::updating(function (Penjualan $penjualan) {
            $prefix = 'UDM';
            $penjualan->kode_penjualan = $prefix . substr($penjualan->kode_penjualan,3);
        });
    }

    public function barang()
    {
        return $this->belongsTo(Barang::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    // public function users()
    // {
    //     return $this->belongsToMany(User::class, 'permohonan_users', 'permohonan_id', 'user_id');
    // }


}
