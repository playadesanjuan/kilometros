const API={

    async guardarCarga(datos){

        const respuesta=await fetch(Config.API_URL,{

            method:"POST",

            body:datos

        });

        return await respuesta.text();

    },

    async obtenerHistorial(){

        const respuesta=await fetch(Config.API_URL);

        return await respuesta.json();

    }

}
