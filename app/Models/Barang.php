<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    use HasFactory;
    //             $table->string('nama_barang');
    // $table->string('harga_beli')->unique();
    // $table->string('harga_jual');
    // $table->boolean('status_barang')->default(true);
    // $table->string('kode_barang');
    // public $incrementing = false;
    // protected $keyType = 'string';
    // public $timestamps = false;
    protected $fillable = ['id', 'nama_barang',
    'harga_beli',
    'harga_jual',
    'satuan',
    'stok_barang',
    'kode_barang'];

    // public function kecamatan()
    // {
    //     return $this->belongsTo(Kecamatan::class);
    // }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('nama_barang', 'like', '%' . $search . '%');
                $query->orWhere('kode_barang', 'like', '%' . $search . '%');
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


    public static function getKodeBarang()
    {
        $now = Carbon::now();
        $year = $now->year;
        $month = $now->month;
        // $date = $now->day;
        // 'SUP2402001'
        $rec = Barang::select('kode_barang')->whereMonth('created_at', '=', $month)->orderBy('id', 'desc')
            ->skip(0)->take(1)->first();
        return substr($year, 2) . str_pad($month, 2, '0', STR_PAD_LEFT) . str_pad($rec ? (int) substr($rec->kode_barang, 7) + 1 : 1, 3, '0', STR_PAD_LEFT);
    }

    // public static function boot()
    // {
    //     parent::boot();
    //     self::creating(function (Barang $barang) {
    //         $prefix = strtoupper(substr(request('satuan'),0,3));
    //         $barang->kode_barang = $prefix . Barang::getKodeBarang();
    //     });
    //     self::updating(function (Barang $barang) {
    //         $prefix = strtoupper(substr(request('satuan'),0,3));
    //         $barang->kode_barang = $prefix . substr($barang->kode_barang,3);
    //     });
    // }
    // public function users()
    // {
    //     return $this->belongsToMany(User::class, 'permohonan_users', 'permohonan_id', 'user_id');
    // }


}
