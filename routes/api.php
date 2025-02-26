<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['namespace' => 'Api'], function() {
    Route::post('register', 'UserController@register');
    Route::post('login', 'UserController@authenticate');
});
Route::group(['namespace' => 'Api', 'middleware' => ['jwt.verify']], function() {
    Route::resource('items', 'ItemController');
});
