/* 
Autor: Abregú Mariela.
Enunciado Ejercicio 04 Bis:

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
    let nombre;
	let apellido; 

	nombre=prompt("ingrese su nombre: ");
	document.getElementById("txtIdNombre").value;
	apellido=prompt("ingrese su apellido: ");
	lue=apellido;
	document.getElementById("txtIdNombre").value="su nombre es: "+ nombre+" y su apellido es: "+apellido;
}

