/*
Autor: Abregú Mariela.
Enunciado ejercicio 02.

Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

function mostrar()
{
	let nombre;
	let datoUsuario;

	nombre=prompt("por favor ingrese su nombre");

	datoUsuario="su nombre es: "+nombre;

	alert(datoUsuario);

}