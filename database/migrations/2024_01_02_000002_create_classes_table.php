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
        Schema::create('classes', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Class name (e.g., 1A, 2B)');
            $table->integer('grade')->comment('Grade level (1-6)');
            $table->string('section', 1)->comment('Class section (A, B, C, etc)');
            $table->foreignId('teacher_id')->nullable()->constrained('teachers')->onDelete('set null');
            $table->integer('capacity')->default(30)->comment('Maximum students capacity');
            $table->boolean('is_active')->default(true)->comment('Class status');
            $table->timestamps();
            
            // Indexes
            $table->index('name');
            $table->index('grade');
            $table->index('section');
            $table->index('teacher_id');
            $table->index('is_active');
            $table->unique(['grade', 'section']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classes');
    }
};