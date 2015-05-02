<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use \App\User;
use \App\Posts;

class DatabaseSeeder extends Seeder {

	/**
     * Run the database seeds.
     *
     * @return void
     */
	public function run( ) {
		Model::unguard( );

        $this->PostsTableSeeder();
	}
    
    private function PostsTableSeeder( ) {
        Eloquent::unguard( );
        DB::table( 'posts' )->delete( );
        
        Posts::create( array(
            'title' => 'Test Post',
            'post_body' => 'This is the body',
            'author' => 'Author Name'
        ) );
    }
}
