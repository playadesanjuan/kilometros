<?php
/*
 * funciones_comunes.php
 * 
 * serie de funciones que se usan en varios sitios
 * 
 * 
 */
		
	



	
function Lee_Configuracion (string $Fichero_a_leer) 

{


// Variables locales


$numlinea =0;


// Abre fichero					
		 
$archivo = fopen($Fichero_a_leer,'r',true);


//recorrer las lineas del archivo 

while ($linea = fgets($archivo))
 {
    $aux[$numlinea] = $linea;    
    $numlinea=$numlinea+1;

 }

// Cierra fichero		

 fclose($archivo);

 // Devuelve array

return $aux;

}	 



			
		



?>