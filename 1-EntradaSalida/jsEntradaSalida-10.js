/*
Autor: Abregú Mariela.
Enunciado Ejercicio .

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento()
{
	let importe;
	let descuento;
    let importeActual;

	importe=parseFloat(document.getElementById("txtIdImporte").value);
	descuento=importe*25/100;
	importeActual=importe-descuento;
	importeActual=document.getElementById("txtIdResultado").value=importeActual;
}
