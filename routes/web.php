<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NoteController;

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

/* Route::get('/', function () {
    return view('welcome');
}); */

/*Route::get('/', [NoteController::class,'index'])->name('home');*/
/* Route::get('/mostrar', [NoteController::class, 'mostrar']);
Route::delete('/borrar/{id}', [NoteController::class, 'borrar']);
Route::post('/recibir', [NoteController::class, 'recibir']);
Route::put('/modificar/{id}', [NoteController::class, 'modificar']); */


Route::get('/', [NoteController::class, 'index']);
Route::post('read', [NoteController::class, 'read']);
Route::post('create', [NoteController::class, 'create']);
Route::post('delete', [NoteController::class, 'delete']);
Route::post('update', [NoteController::class, 'update']);