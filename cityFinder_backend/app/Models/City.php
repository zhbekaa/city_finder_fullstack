<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $table = 'cities';
    protected $fillable = [
        "name",
        "description",
        "img"
    ];
    
    public function universities() 
    {
        return $this->hasMany(University::class, 'city_id');
    }
    public function activities() 
    {
        return $this->hasMany(Activity::class, 'city_id');
    }
    public function shops() 
    {
        return $this->hasMany(Shop::class, 'city_id');
    }
    public function transports() 
    {
        return $this->hasMany(Transport::class, 'city_id');
    }
    public function accommodations() 
    {
        return $this->hasMany(Accommodation::class, 'city_id');
    }
    // protected $fillable = [
    //     ''
    // ]
}