document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calcForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const kilometros = parseFloat(document.getElementById('kilometros').value);
        const bateria = parseFloat(document.getElementById('bateria').value);

        if (isNaN(kilometros) || isNaN(bateria)) {
            alert("Por favor, introduce valores válidos.");
            return;
        }

        const resultado = calcular(kilometros, bateria);
        document.getElementById('resultado').textContent = `CARGAR LA BATERIA: ${resultado}`;
    });
});

function calcular(kilometros, bateria) {
    // Configuracion:
    
    const bateria_maxima = 13.5;
    const kms_maximos_con_bateria= 40;
    const precio_kwh = 0.06;
    const consumo_medio_gasolina = 8.5;
    const precio_litro = 1.7;

    let cargar = "NO cargues";

 
    // Coste de gasolina para los kilómetros indicados
    const coste_gasolina = (consumo_medio_gasolina * precio_litro) * (kilometros / 100);
    
    // coste kms recorridos en electrico

    const coste_kms_en_electrico = kilometros * ((bateria_maxima * precio_kwh) / kms_maximos_con_bateria);

    // Coste de cargar la batería según el porcentaje de batería restante + el coste de los kms en electrico
    const coste_electricidad = (bateria_maxima * ((100-bateria) / 100) * precio_kwh) + coste_kms_en_electrico;

    // Determinar si es más económico cargar la batería
    if (coste_gasolina > coste_electricidad){
        cargar = "Carga la bateria";
    }
   
    return cargar;
}

