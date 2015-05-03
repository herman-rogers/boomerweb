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

// Route::controllers([
// 'auth' => 'Auth\AuthController',
// 'password' => 'Auth\PasswordController',
// ]);

Route::get('/{data?}', function(){
    
    return View::make('ember');
    
});

//Main routes for the API
Route::group(array('prefix' => 'api'), function(){
    
    Route::resource('posts', 'PostsController');
    
});