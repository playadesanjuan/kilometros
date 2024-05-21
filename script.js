document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calcForm');

    let kms_maximos_con_bateria = 0;
    let precio_kwh = 0;
    let consumo_medio_gasolina = 0;
    let precio_litro = 0




// Función para leer el archivo de configuración
function leerConfiguracion(callback) {
    fetch('configuracion.txt')
        .then(response => response.text())
        .then(text => {
            const lines = text.split('\n');
            lines.forEach(line => {
                const [key, value] = line.split('=');
                if (key === 'kms_maximos_con_bateria') {
                    kms_maximos_con_bateria = parseFloat(value.trim());
                } else if (key === 'consumo_medio_gasolina') {
                    consumo_medio_gasolina = parseFloat(value.trim());
                } 
            });
            callback();
        })
        .catch(error => console.error('Error al leer el archivo de configuración:', error));
}




function calcular(kilometros, bateria, kms_maximos_con_bateria, precio_kwh, consumo_medio_gasolina, precio_litro) {
    // Configuracion:
    
    const bateria_maxima = 13.5;

    // Coste de gasolina para los kilómetros indicados
    const coste_gasolina = (consumo_medio_gasolina * precio_litro) * (kilometros / 100);
    
    // coste kms recorridos en electrico

    const coste_kms_en_electrico = kilometros * ((bateria_maxima * precio_kwh) / kms_maximos_con_bateria);

    // Coste de cargar la batería según el porcentaje de batería restante + el coste de los kms en electrico
    const coste_electricidad = (bateria_maxima * ((100-bateria) / 100) * precio_kwh) + coste_kms_en_electrico;

    // Determinar si es más económico cargar la batería
    const cargar = coste_gasolina > coste_electricidad;
        
       
    return cargar;
}


// Leer configuración y configurar el formulario
leerConfiguracion(() => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const kilometros = parseFloat(document.getElementById('kilometros').value);
        const precio_litro = parseFloat(document.getElementById('litro').value);
        const bateria = parseFloat(document.getElementById('bateria').value);
        const precio_kwh = parseFloat(document.getElementById('kwh').value);

        if (isNaN(kilometros) || isNaN(precio_litro) || isNaN(bateria) || isNaN(precio_kwh)) {
            alert("Por favor, introduce valores válidos.");
            return;
        }

        const resultado = calcular(kilometros, bateria, kms_maximos_con_bateria, precio_kwh, consumo_medio_gasolina, precio_litro);
        document.getElementById('resultado').textContent = `CARGAR LA BATERIA: ${resultado}`;
    });
});
});

