function calcular() {

    let producto = document.getElementById("producto").value;

    let precio = Number(document.getElementById("precio").value);

    let cantidad = Number(document.getElementById("cantidad").value);

    let descuento = Number(document.getElementById("descuento").value);

    if (cantidad <= 0) {

        document.getElementById("resultado").innerHTML =
            "La cantidad debe ser mayor que 0.";

    } else {

        let subtotal = precio * cantidad;

        let iva = subtotal * 0.19;

        let total = subtotal + iva;

        let descuentoValor = total * descuento / 100;

        let totalFinal = total - descuentoValor;

        document.getElementById("resultado").innerHTML =
            "Producto: " + producto + "<br>" +
            "Subtotal: $" + subtotal + "<br>" +
            "IVA: $" + iva + "<br>" +
            "Descuento: $" + descuentoValor + "<br>" +
            "Total: $" + totalFinal;
    }
}
