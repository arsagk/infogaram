<?php

namespace App\Http\Resources\Admin;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PembelianCollection extends JsonResource
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
            'id'                => $this->id,
            'barang_id'         => $this->barang_id,
            'client'            => $this->client,
            'barang'            => $this->barang,
            'client_id'         => $this->client_id,
            'jumlah_pembelian'  => $this->jumlah_pembelian,
            'harga_perkg'       => number_format($this->harga_perkg),
            'ongkos_perkg'      => number_format($this->ongkos_perkg),
            'jenis_muatan'      => $this->jenis_muatan,
            'lunas'             => $this->lunas,
            'kode_pembelian'   => $this->kode_pembelian,
        ];

    }
}
