var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

/* function openmodal(id, titulo, desc) {


    form = document.getElementById("formm");
    form.setAttribute("method", "post");
    form.setAttribute("action", "http://localhost:8080/www/Dani/ideas/public/modificar/" + id);
    form.setAttribute("class", "border p-3 form");

    div = document.createElement('DIV');
    div.setAttribute("class", "form-group")
    label = document.createElement('LABEL');
    label.innerHTML = "Título";
    input = document.createElement('INPUT');
    input.setAttribute("value", titulo)
    input.setAttribute("type", "text")
    input.setAttribute("name", "title")
    input.setAttribute("id", "title")
    input.setAttribute("class", "form-control")

    div1 = document.createElement('DIV');
    div1.setAttribute("class", "form-group")
    label1 = document.createElement('LABEL');
    label1.innerHTML = "Descripción";
    input1 = document.createElement('INPUT');
    input1.setAttribute("value", desc)
    input1.setAttribute("type", "text")
    input1.setAttribute("name", "description")
    input1.setAttribute("id", "description")
    input1.setAttribute("class", "form-control")

    btn = document.createElement('input');
    btn.setAttribute("type", "submit")
    btn.setAttribute("class", "btn btn-primary")
    btn.setAttribute("value", "Actualizar")


    form.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
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

} */


span.onclick = function() {
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