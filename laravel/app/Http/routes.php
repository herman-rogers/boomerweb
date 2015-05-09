<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
use App\Posts;
use App\Projects;

Route::model('posts', 'App\Posts');
Route::model('projects', 'App\Projects');

Route::post('login', 'AuthController@authenticate');
Route::post('logout', 'AuthController@logout');


Route::get('/{data?}', function(){
    
    return View::make('ember');
    
});

//Main routes for the API
Route::group(array('prefix' => 'api'), function(){
    
    Route::resource( 'tweets', 'TweetsController' );
    Route::resource( 'users', 'UserController' );
    Route::resource( 'posts', 'PostsController' );
    Route::resource( 'projects', 'ProjectController' );
    Route::resource( 'contactforms', 'ContactFormsController' );
    
});