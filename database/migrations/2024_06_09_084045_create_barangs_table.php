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
        Schema::create('barangs', function (Blueprint $table) {
            $table->id();
            $table->string('nama_barang');
            $table->string('kode_barang')->unique();
            $table->integer('harga_beli')->default(0);
            $table->integer('harga_jual')->default(0);
            $table->integer('stok_barang')->default(0);
            // $table->foreignId('jenishak_id')->constrained()->cascadeOnDelete();;
            // $table->char('nomor_hak', 10);
            // $table->char('persil', 10)->nullable()->default('');
            // $table->char('klas', 10)->nullable()->default('');
            // $table->integer('bidang')->default(1);
            // $table->string('atas_nama');
            // $table->integer('luas_tanah')->default(0);
            $table->enum('satuan', ['kg', 'kwintal'])->default('kg');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('barangs');
    }
};
