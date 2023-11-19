<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_the_application_returns_a_successful_response(): void
    {
        $response = $this->get('api/cities/1');
        $response->assertJson([
            "id" => 2,
            "name" => "illo",
            "description" => "Harum quos veritatis eum voluptate. Distinctio repudiandae itaque quia sit consequatur in."

        ], true);
        // $response->assert(redirect('/admin', 200));
    }
    
}
