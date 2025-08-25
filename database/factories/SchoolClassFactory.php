<?php

namespace Database\Factories;

use App\Models\SchoolClass;
use App\Models\Teacher;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SchoolClass>
 */
class SchoolClassFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\SchoolClass>
     */
    protected $model = SchoolClass::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $grade = $this->faker->numberBetween(1, 6);
        $section = $this->faker->randomElement(['A', 'B', 'C', 'D']);
        
        return [
            'name' => $grade . $section,
            'grade' => $grade,
            'section' => $section,
            'teacher_id' => Teacher::factory(),
            'capacity' => $this->faker->numberBetween(25, 35),
            'is_active' => true,
        ];
    }
}