<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Itemkegiatan extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'nama_itemkegiatan',
        'instansi_id',
        'isunique',
        'akun_id'
    ];
    public function instansi()
    {
        return $this->belongsTo(Instansi::class);
    }
    public function akun()
    {
        return $this->belongsTo(Akun::class);
    }
    public function grupitemkegiatans()
    {
        return $this->belongsToMany(Grupitemkegiatan::class, 'itemkegiatan_grupitemkegiatans', 'itemkegiatan_id', 'grupitemkegiatan_id');
    }
    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('nama_itemkegiatan', 'like', '%' . $search . '%');
            });
        });
    }
}
