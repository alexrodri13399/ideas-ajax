<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ideas</title>
    <link rel="stylesheet" href="{{asset('css/styles.css')}}">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <meta name="csrf-token" id="token" content="{{ csrf_token() }}">
    <script src="js/ajax.js"></script>
</head>

<body>
    <div class="container" style="width: 30%;">
        <div class="abs-center">
            <br>
            <h3 style="text-align: center;">Ideas</h3>
            <form method="post" onsubmit="create(); return false;" id="forminsert" class="border p-3 form">

                <div class="form-group">
                    <label>Título </label>
                    <input class="form-control" type="text" id="title" name="title" placeholder="Título">
                </div>
                <div class="form-group">
                    <label>Descripción</label>
                    <input class="form-control" type="text" id="description" name="description" placeholder="Crear la nota..">
                </div>
                <input type="submit" class="btn btn-success" value="Crear">
            </form>
            <br>
            <h3 id="mensaje">Aquí verás las últimas modificaciones...</h3>
        </div>
    </div>
    </br>
    </br>
    <div class="container">
        <input type="text" name="searchNote" id="searchNote" placeholder="Buscar..." onkeyup="read()">
        <br><br>
        <div class="abs-center" id="section-3">


        </div>
    </div>
    <!--  The Modal -->
    <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content" id="content">
        <span class="close" onclick="closeModal()">&times;</span>
            <div class="container">
                <div class="abs-center" id="datos">
                    <form id="formm">
                        
                    </form>
                </div>
            </div>
        </div>

    </div>
    <script src="{{asset('js/app.js')}}"></script>
    <!-- <script src="{{asset('js/code.js')}}"></script> -->
</body>

</html>