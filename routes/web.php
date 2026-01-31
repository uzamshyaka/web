<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});
Route::get('/about', function () {
    return view('about');
});

Route::get('/impact', function (){
    return view('impact');

});
Route ::get('/service', function (){
    return view ('service');
});
Route::get('/contact', function () {
    return view ('contact');

});

Route::get('/news', function () {
    return view ('news');
});