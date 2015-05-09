<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use \App\User;
use \App\Posts;
use \App\ContactForms;
use \App\Projects;

class DatabaseSeeder extends Seeder {

	/**
     * Run the database seeds.
     *
     * @return void
     */
	public function run( ) {
		Model::unguard( );

        $this->PostsTableSeeder();
        $this->ContactFormsTableSeeder();
        $this->UsersTableSeeder();
        $this->ProjectTableSeeder();
	}
    
    private function PostsTableSeeder( ) {
        Eloquent::unguard( );
        DB::table( 'posts' )->delete( );
        
        Posts::create( array(
            'title' => 'Test Post',
            'image' => 'http://placehold.it/900x300',
            'post_body' => 'This is the body',
            'author' => 'Author Name'
        ) );
        
        Posts::create( array(
            'title' => 'Test Post 2',
            'image' => 'http://placehold.it/900x300',
            'post_body' => 'New Test Body',
            'author' => 'Boomer'
        ) );
    }
    
    private function ContactFormsTableSeeder() {
        Eloquent::unguard();
        DB::table( 'contactforms' )->delete();
        
        ContactForms::create( array(
            'name' => 'test name',
            'email' => 'boomer@test.com',
            'message' => 'Hello There Test Test'
        ) );   
    }
    
    private function UsersTableSeeder() {
        Eloquent::unguard();
        DB::table( 'users' )->delete();
        
        User::create(array(
            'email' => 'boomer@broadsword-publishing.com',
            'password' => Hash::make('tszfaaf0'),
            'remember_token' => true
        ));
    }
    
    private function ProjectTableSeeder() {
        Eloquent::unguard();
        DB::table( 'projects' )->delete();
        
        Projects::create(array(
            'type' => 'personal',
            'name' => 'Test Project',
            'subheading' => 'Version 1.0',
            'image' => 'http://placehold.it/900x300',
            'description' => 'cool new project',
            'project_link' => 'http://www.boomerscript.cc'
        ));
        
        Projects::create(array(
            'type' => 'personal',
            'name' => 'Test Project number Two',
            'subheading' => 'Version Beta 1.0',
            'image' => 'http://placehold.it/900x300',
            'description' => 'cool new project 2',
            'code_link' => 'https://github.com/'
        ));
    }
}
