<?php

namespace App\Http\Resources\Admin;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BarangkeluarCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public static $wrap = null;

    public function toArray(Request $request): array
    {
        return [
            'id'                    => $this->id,
            'penjualan_id'          => $this->penjualan_id,
            'penjualan'             => $this->penjualan,
            'jumlah_muatan'         => number_format($this->jumlah_muatan),
            'jumlah_keluar'         => number_format($this->jumlah_keluar),
            'no_pol'                => $this->no_pol,
            'no_daftar'             => $this->no_daftar,
            'created_at' => Carbon::parse($this->created_at)->format('d M Y'),
        ];

    }
}
