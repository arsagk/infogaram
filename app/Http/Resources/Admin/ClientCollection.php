<?php

namespace App\Http\Resources\Admin;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientCollection extends JsonResource
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
            'nama_client' => $this->nama_client,
            'alamat_client' => $this->alamat_client,
            'no_telp' => $this->no_telp,
            'kode_client' => $this->kode_client,
            'created_at' => $this->created_at,
            'tipe_client' => $this->tipe_client,
            'active' => $this->active,
        ];

    }
}
