/*
Autor: Abregú Mariela.
Enunciado Ejercicio 05:

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

function mostrar()
{	
	let nombre;
	let edad;

	nombre=document.getElementById("txtIdNombre").value;
	edad=document.getElementById("txtIdEdad").value;

	/*
	la practica de éste ejercicio es aprender a concatenar.
	
	puedo concatenar así:
	
	alert ("su nombre es: "+nombre+" y su edad es: "+edad);

	o puedo concatenar así:*/

	alert(`su nombre es: ${nombre} y su edad es: ${edad}`);



}