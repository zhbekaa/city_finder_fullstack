<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    public function list(Request $request)
    {
        $data = $request->validate([
            'limit' => 'integer|gt:0',
            'page' => 'integer|gt:0',
            'q' => 'nullable|string'

        ]);
        $query = $data['q'] ?? null;

        if ($query) {
            $cities = City::where('name', 'like', "%$query%")->get();
        } else {
            $cities = City::paginate($data['limit'] ?? 10, ['*'], 'start', $data['page'] ?? 1);
        }


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
