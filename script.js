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
    const precio_kwh = 0.06;
    const consumo_medio_gasolina = 8.5;
    const precio_litro = 1.7;

    const cargar = false;

    const coste_gasolina = (consumo_medio_gasolina * precio_litro)*(kilometros/100);
    const coste_electricidad = bateria_maxima * (bateria/100) * precio_kwh;

    if (coste_gasolina > coste_electricidad){
        cargar = true;
    }
   
    return cargar;
}

