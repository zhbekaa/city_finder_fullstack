<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    public function list()
    {
        $cities = City::all();
        return response()->json($cities);
    }
    public function details(Request $request)
    {
        $city = City::with([
            'universities', "activities",
            "accommodations",
            "shops",
            "transports"
        ])->find($request->id);
        return response()->json(
            $city
        );
    }
}
