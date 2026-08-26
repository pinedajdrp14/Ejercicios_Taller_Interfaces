function calcularNota() {

    let nombre = document.getElementById("nombre").value;

    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    if (nombre == "") {

        document.getElementById("resultado").innerHTML =
            "Ingrese el nombre.";

    } else if (
        nota1 < 0 || nota1 > 5 ||
        nota2 < 0 || nota2 > 5 ||
        nota3 < 0 || nota3 > 5
    ) {

        document.getElementById("resultado").innerHTML =
            "Las notas deben estar entre 0 y 5.";

    } else {

        let definitiva = (nota1 + nota2 + nota3) / 3;

        if (definitiva >= 3.5) {

            document.getElementById("resultado").innerHTML =
                "Nombre: " + nombre + "<br>" +
                "Nota definitiva: " + definitiva.toFixed(2) + "<br>" +
                "APROBADO";

            document.getElementById("resultado").className = "aprobado";

        } else {

            document.getElementById("resultado").innerHTML =
                "Nombre: " + nombre + "<br>" +
                "Nota definitiva: " + definitiva.toFixed(2) + "<br>" +
                "REPROBADO";

            document.getElementById("resultado").className = "reprobado";
        }
    }
}
