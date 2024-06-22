<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    //             $table->string('nama_client');
    // $table->string('no_telp')->unique();
    // $table->string('alamat_client');
    // $table->boolean('status_client')->default(true);
    // $table->string('kode_client');
    // public $incrementing = false;
    // protected $keyType = 'string';
    // public $timestamps = false;
    protected $fillable = ['id', 'nama_client',
    'no_telp',
    'alamat_client',
    'status_client',
    'tipe_client',
    'kode_client'];

    // public function kecamatan()
    // {
    //     return $this->belongsTo(Kecamatan::class);
    // }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('nama_client', 'like', '%' . $search . '%');
                $query->orWhere('kode_client', 'like', '%' . $search . '%');
                $query->orWhere('alamat_client', 'like', '%' . $search . '%');
            });
        })
        ->when($filters['tipe_client'] ?? null, function ($query, $tipe_client) {
            $query->where('tipe_client', $tipe_client);
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


    public static function getKodeClient()
    {
        $now = Carbon::now();
        $year = $now->year;
        $month = $now->month;
        // $date = $now->day;
        // 'SUP2402001'
        $rec = Client::select('kode_client')->whereMonth('created_at', '=', $month)->orderBy('id', 'desc')
            ->skip(0)->take(1)->first();
        return substr($year, 2) . str_pad($month, 2, '0', STR_PAD_LEFT) . str_pad($rec ? (int) substr($rec->kode_client, 7) + 1 : 1, 3, '0', STR_PAD_LEFT);
    }

    public static function boot()
    {
        parent::boot();
        self::creating(function (Client $client) {
            $prefix = strtoupper(substr(request('tipe_client'),0,3));
            $client->kode_client = $prefix . Client::getKodeClient();
        });
        self::updating(function (Client $client) {
            $prefix = strtoupper(substr(request('tipe_client'),0,3));
            $client->kode_client = $prefix . substr($client->kode_client,3);
        });
    }
    // public function users()
    // {
    //     return $this->belongsToMany(User::class, 'permohonan_users', 'permohonan_id', 'user_id');
    // }


}
