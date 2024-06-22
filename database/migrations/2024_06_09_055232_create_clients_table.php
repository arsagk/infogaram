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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('nama_client');
            $table->string('no_telp')->unique();
            $table->string('alamat_client');
            $table->boolean('status_client')->default(true);
            $table->string('kode_client');
            // $table->foreignId('jenishak_id')->constrained()->cascadeOnDelete();;
            // $table->char('nomor_hak', 10);
            // $table->char('persil', 10)->nullable()->default('');
            // $table->char('klas', 10)->nullable()->default('');
            // $table->integer('bidang')->default(1);
            // $table->string('atas_nama');
            // $table->integer('luas_tanah')->default(0);
            $table->enum('tipe_client', ['Supplier', 'Pembeli'])->default('Supplier');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
