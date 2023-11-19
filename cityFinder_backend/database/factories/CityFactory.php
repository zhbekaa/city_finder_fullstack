<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Provider\en_GB\Address;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\City>
 */
class CityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => "",
            "description" => $this->faker->realText(),
            "img" => 'https://placehold.co/600x400',
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
