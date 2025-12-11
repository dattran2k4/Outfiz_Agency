<?php

use Illuminate\Support\Facades\Route;

// Bắt tất cả đường dẫn (trừ các route đã định nghĩa bên trên)
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
