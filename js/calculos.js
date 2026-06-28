const Calculos = {

    actualizarPrecio() {

        const carga = parseFloat(
            document.getElementById("carga_kw").value.replace(",", ".")
        );

        const precio = parseFloat(
            document.getElementById("precio_total").value.replace(",", ".")
        );

        if (isNaN(carga) || isNaN(precio) || carga <= 0) {

            document.getElementById("precio_kwh").textContent = "--";

            return;

        }

        const resultado = precio / carga;

        document.getElementById("precio_kwh").textContent =
            resultado.toFixed(3).replace(".", ",") + " €/kWh";

    }

}
