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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Student full name');
            $table->string('nis')->unique()->comment('Student Identification Number');
            $table->string('nisn')->unique()->comment('National Student Identification Number');
            $table->enum('gender', ['male', 'female'])->comment('Student gender');
            $table->decimal('academic_score', 5, 2)->nullable()->comment('Academic score (0-100)');
            $table->text('special_needs')->nullable()->comment('Special needs description');
            $table->foreignId('class_id')->nullable()->constrained('classes')->onDelete('set null');
            $table->date('birth_date')->nullable()->comment('Student birth date');
            $table->text('address')->nullable()->comment('Student address');
            $table->string('parent_phone')->nullable()->comment('Parent phone number');
            $table->boolean('is_active')->default(true)->comment('Student status');
            $table->timestamps();
            
            // Indexes
            $table->index('name');
            $table->index('nis');
            $table->index('nisn');
            $table->index('gender');
            $table->index('academic_score');
            $table->index('class_id');
            $table->index('is_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};