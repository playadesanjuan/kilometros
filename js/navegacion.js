const Navegacion = {

    iniciar() {

        document
            .getElementById("menuInicio")
            .onclick = () => this.ir("Inicio");

        document
            .getElementById("menuHistorial")
            .onclick = () => this.ir("Historial");

        document
            .getElementById("menuEstadisticas")
            .onclick = () => this.ir("Estadisticas");

        document
            .getElementById("menuPVPC")
            .onclick = () => this.ir("PVPC");

    },

    ir(nombre){

document
.querySelectorAll(".pantalla")
.forEach(p=>p.classList.remove("activa"));

document
.querySelectorAll("nav a")
.forEach(p=>p.classList.remove("active"));

document
.getElementById("pantalla"+nombre)
.classList.add("activa");

document
.getElementById("menu"+nombre)
.classList.add("active");

if(nombre=="Historial"){

    Historial.cargar();

}

}
}; 
