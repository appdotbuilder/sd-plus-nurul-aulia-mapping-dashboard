<?php

namespace Database\Seeders;

use App\Models\Teacher;
use App\Models\SchoolClass;
use App\Models\Student;
use Illuminate\Database\Seeder;

class SchoolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create teachers
        Teacher::factory()->create([
            'name' => 'Administrator',
            'nip' => '1234567890',
            'role' => 'admin',
        ]);

        Teacher::factory(15)->create([
            'role' => 'wali_kelas',
        ]);

        Teacher::factory(5)->create([
            'role' => 'guru_bk',
        ]);

        // Create classes for grades 1-6, sections A-C
        for ($grade = 1; $grade <= 6; $grade++) {
            for ($section = 0; $section < 3; $section++) {
                $sectionLetter = chr(65 + $section); // A, B, C
                
                $teacher = Teacher::where('role', 'wali_kelas')
                    ->whereDoesntHave('classes')
                    ->first();

                SchoolClass::factory()->create([
                    'name' => $grade . $sectionLetter,
                    'grade' => $grade,
                    'section' => $sectionLetter,
                    'teacher_id' => $teacher ? $teacher->id : null,
                    'capacity' => random_int(28, 32),
                ]);
            }
        }

        // Create students and assign them to classes
        $classes = SchoolClass::all();
        
        foreach ($classes as $class) {
            // Create 20-30 students per class
            $studentCount = random_int(20, min(30, $class->capacity));
            
            Student::factory($studentCount)->create([
                'class_id' => $class->id,
            ]);
        }

        // Create some unassigned students
        Student::factory(25)->create([
            'class_id' => null,
        ]);
    }
}