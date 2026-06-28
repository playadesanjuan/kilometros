const UI = {

    mostrarMensaje(texto, tipo = "ok") {

        const mensaje = document.getElementById("mensaje");

        mensaje.innerHTML = texto;

        mensaje.className = "mensaje " + tipo;

        setTimeout(() => {

            mensaje.innerHTML = "";

            mensaje.className = "mensaje";

        }, 3000);

    }

};
