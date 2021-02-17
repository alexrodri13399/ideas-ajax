<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function show(Note $note)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function edit(Note $note)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
   

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function destroy(Note $note)
    {
        //
    }

    public function index() {
        return view('mostrar');
    }

    public function read(Request $request) {
        // Obtener todos los usuarios de la base de datosy mandarlos a la vista.
        //$result = DB::select('SELECT * FROM tbl_alumnos;');
        //Otra manera
        //$listaNotas = DB::table('notes')->get();
        //para mopstrar poner return $listaAlumnos
        //para mostrar en la vista
        //compact para pasarle mas de una variable a lista
        //return view('mostrar',compact('listaNotas'));
        $filtro = $request->input('filtro');
        /* if ($filtro == "") {
            $notas=DB::select('select * from notes');
        } else {
            $notas=DB::select('select * from notes where title LIKE ?',["%".$filtro."%"]);
        } */
        $notas=DB::select('select * from notes where title LIKE ?',["%".$filtro."%"]);
        return response()->json($notas,200);
        // return JSON;
    }

    /* public function borrar($id)
    {
        DB::table('notes')->where('id','=',$id)->delete();
        //se va a la ruta mostrar
        return redirect('mostrar');
    }*/

    public function create(Request $request){
        //$datos=$request->except('_token', 'Enviar');
        //return $datos['nombre'];
        try {
            $title = $request->input('title');
            $description = $request->input('description');
            DB::table('notes')->insertGetId(['title'=>$title,'description'=>$description]);
            return response()->json(array('resultado'=>'OK'),200);
        } catch (\Throwable $th) {
            return response()->json(array('resultado'=>'NOK '.$th->getMessage()),200);
        }
    }

    public function delete(Request $request){
        //$datos=$request->except('_token', 'Enviar');
        //return $datos['nombre'];
        try {
            $id = $request->input('id');
            DB::table('notes')->where('id','=',$id)->delete();
            return response()->json(array('resultado'=>'OK'),200);
        } catch (\Throwable $th) {
            return response()->json(array('resultado'=>'NOK '.$th->getMessage()),200);
        }
    }

    public function update(Request $request){
        //Recibir los datos del formulario
        //$datos=request()->except('_token', 'Enviar', '_method', 'PUT');
        //return $datos;
        // Actualizar base de datos.
        //DB::table('notes')->where('id','=',$id)->update($datos);
        // Redirigir a base de datos.
        //return redirect('mostrar');

        try {
            $title=$request->input('title');
            $desc=$request->input('description');
            $id=$request->input('id');
            DB::update('UPDATE notes SET title = "'.$title.'", description = "'.$desc.'" WHERE notes.id = "'.$id.'"');
            return response()->json(array('resultado'=>'OK'),200);
        } catch (\Throwable $th) {
            return response()->json(array('resultado'=>'NOK '.$th->getMessage()),200);
        }

    } 


}
