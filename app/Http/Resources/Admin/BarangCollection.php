<?php

namespace App\Http\Resources\Admin;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BarangCollection extends JsonResource
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
            'id' => $this->id,
            'nama_barang' => $this->nama_barang,
            'harga_beli' => number_format($this->harga_beli),
            'harga_jual' => number_format($this->harga_jual),
            'satuan' => $this->satuan,
            'kode_barang' => $this->kode_barang,
            'stok_barang' => $this->stok_barang,
            'created_at' => $this->created_at,
            'active' => $this->active,
        ];

    }
}
