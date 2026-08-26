let productos = [];

function agregar() {

    let nombre = document.getElementById("nombre").value;
    let precio = Number(document.getElementById("precio").value);
    let cantidad = Number(document.getElementById("cantidad").value);
    let categoria = document.getElementById("categoria").value;

    if (nombre == "" || precio <= 0 || cantidad <= 0) {

        document.getElementById("mensaje").innerHTML =
            "Ingrese datos válidos.";

    } else {

        let producto = {
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
            categoria: categoria
        };

        productos.push(producto);

        mostrar();

        document.getElementById("nombre").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("cantidad").value = "";
    }
}


function mostrar() {

    let tabla = document.getElementById("tabla");

    tabla.innerHTML = "";

    let cantidadTotal = 0;
    let valorTotal = 0;

    for (let i = 0; i < productos.length; i++) {

        let producto = productos[i];

        let total = producto.precio * producto.cantidad;

        cantidadTotal = cantidadTotal + producto.cantidad;

        valorTotal = valorTotal + total;

        let fila = document.createElement("tr");

        let nombre = document.createElement("td");
        nombre.innerHTML = producto.nombre;

        let precio = document.createElement("td");
        precio.innerHTML = "$" + producto.precio;

        let cantidad = document.createElement("td");
        cantidad.innerHTML = producto.cantidad;

        let totalColumna = document.createElement("td");
        totalColumna.innerHTML = "$" + total;

        let accion = document.createElement("td");

        let boton = document.createElement("button");

        boton.innerHTML = "Eliminar";

        boton.onclick = function() {
            eliminar(i);
        };

        accion.appendChild(boton);

        fila.appendChild(nombre);
        fila.appendChild(precio);
        fila.appendChild(cantidad);
        fila.appendChild(totalColumna);
        fila.appendChild(accion);

        tabla.appendChild(fila);
    }

    document.getElementById("cantidadTotal").innerHTML =
        cantidadTotal;

    document.getElementById("valorTotal").innerHTML =
        valorTotal;
}


function eliminar(i) {

    productos.splice(i, 1);

    mostrar();
}
