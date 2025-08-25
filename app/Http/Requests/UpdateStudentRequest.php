<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStudentRequest extends FormRequest
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
            'nis' => 'required|string|unique:students,nis,' . $this->route('student')->id . '|max:255',
            'nisn' => 'required|string|unique:students,nisn,' . $this->route('student')->id . '|max:255',
            'gender' => 'required|in:male,female',
            'academic_score' => 'nullable|numeric|min:0|max:100',
            'special_needs' => 'nullable|string|max:1000',
            'class_id' => 'nullable|exists:classes,id',
            'birth_date' => 'nullable|date|before:today',
            'address' => 'nullable|string|max:500',
            'parent_phone' => 'nullable|string|max:20',
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
            'name.required' => 'Nama siswa wajib diisi.',
            'nis.required' => 'NIS siswa wajib diisi.',
            'nis.unique' => 'NIS sudah terdaftar.',
            'nisn.required' => 'NISN siswa wajib diisi.',
            'nisn.unique' => 'NISN sudah terdaftar.',
            'gender.required' => 'Jenis kelamin wajib dipilih.',
            'gender.in' => 'Jenis kelamin tidak valid.',
            'academic_score.numeric' => 'Nilai akademik harus berupa angka.',
            'academic_score.min' => 'Nilai akademik minimal 0.',
            'academic_score.max' => 'Nilai akademik maksimal 100.',
            'class_id.exists' => 'Kelas tidak ditemukan.',
            'birth_date.date' => 'Format tanggal lahir tidak valid.',
            'birth_date.before' => 'Tanggal lahir harus sebelum hari ini.',
            'parent_phone.max' => 'Nomor telepon maksimal 20 karakter.',
        ];
    }
}