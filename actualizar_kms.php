<?php


// Produccion

 include("configuracion.txt");
 include("funciones_comunes.php");

 echo "no lei la configuracion";
 die();

 $aux= Lee_Configuracion ("configuracion.txt");

echo "ya lei la configuracion";

$bateria=$aux[0];
$bateria = preg_replace("[\n|\r|\n\r]", "", $bateria);

$coste_kwh=$aux[1];
$coste_kwh = preg_replace("[\n|\r|\n\r]", "", $coste_kwh);


$consumo_litros=$aux[2];
$consumo_litros = preg_replace("[\n|\r|\n\r]", "", $consumo_litros);


$coste_litro=$aux[3];
$coste_litro = preg_replace("[\n|\r|\n\r]", "", $coste_litro);

printf($bateria);
printf($coste_kwh);
printf($consumo_litros);
printf($coste_litro);

die();



/* // Datos de conexión a la base de datos
$host = "localhost";
$usuario = "root";
$contrasena = "";
$base_de_datos = "mantenimiento";

// Conectarse a la base de datos
$conexion = mysqli_connect($host, $usuario, $contrasena, $base_de_datos);

// Verificar la conexión
if (!$conexion) {
    die("La conexión a la base de datos ha fallado: " . mysqli_connect_error());
}

// Obtener la fecha y los kilómetros actuales del formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obtener los valores de fecha y kilómetros del formulario
  $fechaActual = $_POST['fecha'];
  $kilometrosActuales = $_POST['kilometros'];
};

// Realizar una consulta para obtener datos de la tabla "revision_mini"
$consulta = "SELECT * FROM revision_mini";
$resultado = mysqli_query($conexion, $consulta);

// Procesar los resultados y comprobar qué operaciones se deben realizar
if (mysqli_num_rows($resultado) > 0) {
    while ($fila = mysqli_fetch_array($resultado)) {
        $fechaUltimaOperacion = $fila["FECHA ULTIMA OPERACION"];


        $kmsUltimaOperacion = $fila["Kms ULTIMA OPERACION"];


        $mesesEntreOperaciones = $fila["MESES ENTRE OPERACIONES"];


        if ($mesesEntreOperaciones==''){
            $mesesEntreOperaciones=3;
        }

        $kmsEntreOperaciones = $fila["Kms ENTRE OPERACIONES"];


  // Comprobar si se deben realizar la operación basándose en los kilómetros
$condicionKilometros = $kilometrosActuales >= ($kmsUltimaOperacion + $kmsEntreOperaciones);

// Comprobar si se deben realizar la operación basándose en la fecha






// Convierte la fecha a un objeto DateTime
$fechaUltimaOperacion = new DateTime($fechaUltimaOperacion);


// Crea un intervalo de tiempo en meses
$intervalo = new DateInterval("P{$mesesEntreOperaciones}M");

// Suma el intervalo a la fecha
$fechaResultado = date_add($fechaUltimaOperacion, $intervalo);

// Formatea la fecha resultante
$fechaFormateada = $fechaResultado->format('d-m-Y');

echo "Fecha resultante: " . $fechaFormateada;


    die();

  

if ($fechaActual >= $fechaResultado)   
    {
        $condicionFecha = true;
    }


// Comprobar si al menos una de las dos condiciones es verdadera
if ($condicionKilometros || $condicionFecha) {
    echo "Se debe realizar la operación: " . $fila["OPERACION"] . "<br>";

}
    }
} else {
    echo "No se encontraron resultados en la tabla 'revision_mini'.";
}

// Cerrar la conexión
mysqli_close($conexion); */
?>