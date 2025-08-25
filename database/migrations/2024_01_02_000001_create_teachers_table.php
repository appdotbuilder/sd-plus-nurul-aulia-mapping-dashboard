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
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Teacher full name');
            $table->string('nip')->unique()->comment('Teacher ID number');
            $table->enum('role', ['admin', 'wali_kelas', 'guru_bk'])->default('wali_kelas')->comment('Teacher role');
            $table->boolean('is_active')->default(true)->comment('Teacher status');
            $table->timestamps();
            
            // Indexes
            $table->index('name');
            $table->index('nip');
            $table->index('role');
            $table->index('is_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};