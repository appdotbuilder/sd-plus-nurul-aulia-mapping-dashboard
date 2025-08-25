<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreClassRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'grade' => 'required|integer|min:1|max:6',
            'section' => 'required|string|size:1|regex:/^[A-Z]$/',
            'teacher_id' => 'nullable|exists:teachers,id',
            'capacity' => 'required|integer|min:1|max:50',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Nama kelas wajib diisi.',
            'grade.required' => 'Tingkat kelas wajib diisi.',
            'grade.min' => 'Tingkat kelas minimal 1.',
            'grade.max' => 'Tingkat kelas maksimal 6.',
            'section.required' => 'Rombel kelas wajib diisi.',
            'section.size' => 'Rombel harus 1 karakter.',
            'section.regex' => 'Rombel harus huruf kapital (A-Z).',
            'teacher_id.exists' => 'Guru tidak ditemukan.',
            'capacity.required' => 'Kapasitas kelas wajib diisi.',
            'capacity.min' => 'Kapasitas minimal 1 siswa.',
            'capacity.max' => 'Kapasitas maksimal 50 siswa.',
        ];
    }
}