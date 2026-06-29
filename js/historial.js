const Historial = {

    async cargar() {

        const historial = document.getElementById("historial");

        historial.innerHTML = `
            <div class="loader">
                Cargando historial...
            </div>
        `;

        try {

            const datos = await API.obtenerHistorial();

            historial.innerHTML = "";

            if (datos.length === 0) {

                historial.innerHTML = `
                    <div class="sinDatos">

                        📄

                        <h3>No hay cargas registradas</h3>

                    </div>
                `;

                return;

            }

            datos.forEach(carga => {

                historial.appendChild(this.crearTarjeta(carga));

            });

        }
        catch (e) {

            historial.innerHTML = `
                <div class="errorCarga">

                    Error cargando el historial

                </div>
            `;

        }

    },

    crearTarjeta(carga){

        const card = document.createElement("div");

        card.className = "tarjetaCarga";

        card.innerHTML = `

            <div class="cabeceraTarjeta">

                <div class="empresa">

                    ${this.iconoEmpresa(carga.empresa)}

                    <span>${carga.empresa}</span>

                </div>

                <div class="fecha">

                    ${this.formateaFecha(carga.fecha)}

                </div>

            </div>

            <div class="datos">

                <div>

                    <small>Energía</small>

                    <strong>${Number(carga.carga).toFixed(2).replace(".",",")} kWh</strong>

                </div>

                <div>

                    <small>Precio</small>

                    <strong>${Number(carga.precio).toFixed(2).replace(".",",")} €</strong>

                </div>

                <div>

                    <small>€/kWh</small>

                    <strong>${Number(carga.precioKwh).toFixed(3).replace(".",",")}</strong>

                </div>

            </div>

        `;

        return card;

    },

    iconoEmpresa(nombre){

        switch(nombre.toLowerCase()){

            case "tesla":
                return "⚡";

            case "iberdrola":
                return "🟢";

            case "zunder":
                return "🔵";

            case "ionity":
                return "🟣";

            case "repsol":
                return "🟠";

            case "endesa":
                return "🔷";

            default:
                return "🔌";

        }

    },

    formateaFecha(fecha){

        return new Date(fecha).toLocaleString("es-ES");

    }

}
