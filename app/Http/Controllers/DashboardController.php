<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\SchoolClass;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the main dashboard.
     */
    public function index()
    {
        // Get statistics
        $totalStudents = Student::active()->count();
        $totalClasses = SchoolClass::active()->count();
        $totalTeachers = Teacher::active()->count();
        $studentsWithSpecialNeeds = Student::active()->whereNotNull('special_needs')->count();

        // Gender distribution
        $maleStudents = Student::active()->where('gender', 'male')->count();
        $femaleStudents = Student::active()->where('gender', 'female')->count();

        // Academic score distribution
        $excellentStudents = Student::active()->where('academic_score', '>=', 90)->count();
        $goodStudents = Student::active()->whereBetween('academic_score', [80, 89.99])->count();
        $averageStudents = Student::active()->whereBetween('academic_score', [70, 79.99])->count();
        $belowAverageStudents = Student::active()->where('academic_score', '<', 70)->count();

        // Students per class
        $classDistribution = SchoolClass::active()
            ->withCount('students')
            ->orderBy('grade')
            ->orderBy('section')
            ->get()
            ->map(function ($class) {
                return [
                    'name' => $class->name,
                    'count' => $class->students_count,
                    'capacity' => $class->capacity,
                ];
            });

        return Inertia::render('dashboard', [
            'statistics' => [
                'totalStudents' => $totalStudents,
                'totalClasses' => $totalClasses,
                'totalTeachers' => $totalTeachers,
                'studentsWithSpecialNeeds' => $studentsWithSpecialNeeds,
            ],
            'genderDistribution' => [
                'male' => $maleStudents,
                'female' => $femaleStudents,
            ],
            'academicDistribution' => [
                'excellent' => $excellentStudents,
                'good' => $goodStudents,
                'average' => $averageStudents,
                'belowAverage' => $belowAverageStudents,
            ],
            'classDistribution' => $classDistribution,
        ]);
    }
}