document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {

    document
        .getElementById("carga_kw")
        .addEventListener("input", Calculos.actualizarPrecio);

    document
        .getElementById("precio_total")
        .addEventListener("input", Calculos.actualizarPrecio);

    document
        .getElementById("cargas-form")
        .addEventListener("submit", guardar);

}

async function guardar(e) {

    e.preventDefault();

    const boton = document.getElementById("btnGuardar");

    boton.disabled = true;

    boton.innerHTML = "Guardando...";

    const datos = new FormData(e.target);

    try {

        const respuesta = await API.guardarCarga(datos);

        UI.mostrarMensaje("✅ Carga guardada correctamente");

        e.target.reset();

        document.getElementById("precio_kwh").textContent = "--";

    }
    catch (error) {

        UI.mostrarMensaje("❌ Error de conexión", "error");

    }

    boton.disabled = false;

    boton.innerHTML = "Guardar carga";

}
