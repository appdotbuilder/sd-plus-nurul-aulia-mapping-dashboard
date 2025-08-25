<?php

namespace Database\Factories;

use App\Models\Student;
use App\Models\SchoolClass;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Student>
     */
    protected $model = Student::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'nis' => $this->faker->unique()->numerify('##########'),
            'nisn' => $this->faker->unique()->numerify('############'),
            'gender' => $this->faker->randomElement(['male', 'female']),
            'academic_score' => $this->faker->randomFloat(2, 60, 100),
            'special_needs' => $this->faker->optional(0.1)->sentence(),
            'class_id' => null, // Will be assigned later
            'birth_date' => $this->faker->dateTimeBetween('-12 years', '-6 years')->format('Y-m-d'),
            'address' => $this->faker->optional()->address(),
            'parent_phone' => $this->faker->optional()->phoneNumber(),
            'is_active' => true,
        ];
    }
}