<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{slug}', function($path = null){ return view('welcome'); })->where('slug', '(?!api)([A-z\d-\/_.]+)?');
/*ANS848 - TriVH - add route for Item*/
Route::resource('items', 'ItemController');