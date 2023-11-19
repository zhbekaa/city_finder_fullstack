<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Storage;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = Storage::disk("local")->get("/json/cities_with_images.json");

        $jcities = json_decode($json, true);
        foreach ($jcities as $city) {
            $cities = City::factory()->create([
                "name" => $city["city"],
                "img" => $city['img'],
                "population" => $city["population"],
                "lat" => $city["lat"],
                "lng" => $city["lng"]
            ]);
        }
    }
}
