<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTeacherRequest extends FormRequest
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
            'nip' => 'required|string|unique:teachers,nip|max:255',
            'role' => 'required|in:admin,wali_kelas,guru_bk',
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
            'name.required' => 'Nama guru wajib diisi.',
            'nip.required' => 'NIP guru wajib diisi.',
            'nip.unique' => 'NIP sudah terdaftar.',
            'role.required' => 'Peran guru wajib dipilih.',
            'role.in' => 'Peran guru tidak valid.',
        ];
    }
}