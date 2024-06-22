<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('penjualans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('barang_id')->constrained()->cascadeOnDelete();
            $table->foreignId('client_id')->constrained()->cascadeOnDelete();
            $table->integer('jumlah_penjualan')->default(0);
            $table->integer('harga_perkg')->default(0);
            $table->integer('ongkos_perkg')->default(0);
            $table->enum('jenis_muatan', ['Curai', 'Karung'])->default('Curai');
            $table->boolean('lunas')->default(true);
            $table->boolean('used')->default(false);
            $table->string('kode_penjualan')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('penjualans');
    }
};
