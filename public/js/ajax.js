window.onload = function() {
    modal = document.getElementById("myModal");
    read();
}

function objetoAjax() {
    var xmlhttp = false;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

/* Muestra todos los registros de la base de datos (sin filtrar y filtrados) */
function read() {
    var section = document.getElementById('section-3');
    var buscador = document.getElementById('searchNote').value;
    var token = document.getElementById('token').getAttribute('content');
    var ajax = new objetoAjax();
    ajax.open('POST', 'read', true);
    var datasend = new FormData();
    datasend.append('filtro', buscador);
    datasend.append('_token', token)

    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(ajax.responseText);
            var tabla = '';
            tabla += '<table class="table table-light">';
            tabla += '<thead>';
            tabla += '<tr class="thead-dark">';
            /* tabla += '<th>Id</th>'; */
            tabla += '<th>Título</th>';
            tabla += '<th>Descripción</th>';
            tabla += '<th>Actualizar</th>';
            tabla += '<th>Borrar</th>';
            tabla += '</tr>';
            tabla += '</thead>';
            tabla += '<tbody>';

            for (let i = 0; i < respuesta.length; i++) {
                //const element = array[i];
                tabla += '<tr>';
                /* tabla += '<td>' + respuesta[i].id + '</td>'; */
                tabla += '<td>' + respuesta[i].title + '</td>';
                tabla += '<td>' + respuesta[i].description + '</td>';
                tabla += '<td><button class="btn btn-primary" onclick="openmodal(' + respuesta[i].id + ',&#039;' + respuesta[i].title + '&#039;,&#039;' + respuesta[i].description + '&#039;)">Actualizar</button></td>';
                tabla += '<td><button class="btn btn-danger" onclick="eliminar(' + respuesta[i].id + ')" type="submit">Borrar</button></td>';
                tabla += '</tr>';
            }
            tabla += '</tbody>';
            tabla += '</table>';
            section.innerHTML = tabla;
        }
    }
    ajax.send(datasend);

}


/* Actualiza el campo favorito de un pokemon en la base de datos */
function create() {
    var token = document.getElementById('token').getAttribute('content');
    var ajax = new objetoAjax();
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var mensaje = document.getElementById('mensaje');
    ajax.open('POST', 'create', true);
    var datasend = new FormData();
    datasend.append('title', title)
    datasend.append('description', description)
    datasend.append('_token', token)
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(ajax.responseText);
            if (respuesta.resultado == 'OK') {
                mensaje.innerHTML = 'Se ha añadido la nota correctamente';
                setTimeout(function() {
                    mensaje.innerHTML = 'Aquí verás las últimas modificaciones...';
                    document.getElementById('forminsert').reset();
                }, 2000);
                read();
            } else {
                mensaje.innerHTML = 'Ha ocurrido un error. ' + respuesta.resultado;
            }

        }
    }
    ajax.send(datasend);

}

function eliminar(id) {
    var token = document.getElementById('token').getAttribute('content');
    var ajax = new objetoAjax();
    var mensaje = document.getElementById('mensaje');
    ajax.open('POST', 'delete', true);
    var datasend = new FormData();
    datasend.append('id', id)
    datasend.append('_token', token)
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(ajax.responseText);
            if (respuesta.resultado == 'OK') {
                mensaje.innerHTML = 'Se ha eliminado la nota correctamente';
                setTimeout(function() {
                    mensaje.innerHTML = 'Aquí verás las últimas modificaciones...';
                }, 2000);
                read();
            } else {
                mensaje.innerHTML = 'Ha ocurrido un error. ' + respuesta.resultado;
            }

        }
    }
    ajax.send(datasend);

}

function actualizar() {
    //poner variables dentro de la funcion function actualizar(id,title,description)
    var token = document.getElementById('token').getAttribute('content');
    var ajax = new objetoAjax();
    var id = document.getElementById('id').value;
    var title = document.getElementById('titlee').value;
    var description = document.getElementById('descriptionn').value;
    console.log(id);
    console.log(title);
    console.log(description);
    var mensaje = document.getElementById('mensaje');
    ajax.open('POST', 'update', true);
    var datasend = new FormData();
    datasend.append('id', id)
    datasend.append('title', title)
    datasend.append('description', description)
    datasend.append('_token', token)
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(ajax.responseText);
            if (respuesta.resultado == 'OK') {
                mensaje.innerHTML = 'Se ha actualizado correctamente';
                setTimeout(function() {
                    mensaje.innerHTML = 'Aquí verás las últimas modificaciones...';
                }, 2000);
                read();
            } else {
                mensaje.innerHTML = 'Ha ocurrido un error. ' + respuesta.resultado;
            }
            closeModal();
        }
    }
    ajax.send(datasend);

}


function openmodal(id, titulo, desc) {

    form = document.getElementById("formm");
    form.setAttribute("method", "post");
    form.setAttribute("onsubmit", "actualizar(); return false;");
    //form.setAttribute("onsubmit", "actualizar(" + id + "," + titulo + "," + desc + "); return false;");
    form.setAttribute("class", "border p-3 form");

    div = document.createElement('DIV');
    div.setAttribute("class", "form-group")
    label = document.createElement('LABEL');
    label.innerHTML = "Título";
    input = document.createElement('INPUT');
    input.setAttribute("value", titulo)
    input.setAttribute("type", "text")
    input.setAttribute("name", "title")
    input.setAttribute("id", "titlee")
    input.setAttribute("class", "form-control")
    input0 = document.createElement('INPUT');
    input0.setAttribute("value", id)
    input0.setAttribute("type", "hidden")
    input0.setAttribute("name", "id")
    input0.setAttribute("id", "id")
    input0.setAttribute("class", "form-control")

    div1 = document.createElement('DIV');
    div1.setAttribute("class", "form-group")
    label1 = document.createElement('LABEL');
    label1.innerHTML = "Descripción";
    input1 = document.createElement('INPUT');
    input1.setAttribute("value", desc)
    input1.setAttribute("type", "text")
    input1.setAttribute("name", "description")
    input1.setAttribute("id", "descriptionn")
    input1.setAttribute("class", "form-control")

    btn = document.createElement('input');
    btn.setAttribute("type", "submit")
    btn.setAttribute("class", "btn btn-primary")
    btn.setAttribute("value", "Actualizar")


    form.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(input0);
    form.appendChild(div1);
    div1.appendChild(label1);
    div1.appendChild(input1);
    form.appendChild(btn);




    //document.getElementById("content").innerHTML += '<form action="{{url(' + info + '.$nota->' + id + ')}}" method="post"><label>Título</label><br><input type="text" id="title" name="title" value="' + titulo + '"></br><label>Descripción</label><br><input type="text" id="description" name="description" value="' + desc + '"><br><input type="submit" class="btn-outline-primary" value="Crear"></form>';
    //document.getElementById("content").innerHTML += '<label>Título </label>';
    //document.getElementById("content").innerHTML += '<input type="text" id="title" name="title" value="' + titulo + '"></br>';
    //document.getElementById("content").innerHTML += '<label>Descripción</label>';
    //document.getElementById("content").innerHTML += '<input type="text" id="description" name="description" value="' + desc + '"><br>';
    //document.getElementById("content").innerHTML += '<input type="submit" class="btn-outline-primary" value="Crear">';

    modal.style.display = "block";

}

function closeModal() {
    modal.style.display = "none";
    document.getElementById("formm").removeChild(div)
    document.getElementById("formm").removeChild(div1)
    document.getElementById("formm").removeChild(btn)
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("formm").removeChild(div)
        document.getElementById("formm").removeChild(div1)
        document.getElementById("formm").removeChild(btn)
    }
}

/* comillas en envío de variables de entrada en funciones JS: &#039; */

/* EX:
1. filtro favoritos
2. liberar pokémons (quitar la imagen)
*/