/*
autor: Abregú Mariela.
enunciado ejercicio 02:
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	var datoUsuario;

	nombre=prompt("por favor ingrese su nombre");

	datoUsuario="su nombre es: "+nombre;

	alert(datoUsuario);

}