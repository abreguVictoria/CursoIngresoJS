/*
autor: Abregú Mariela.
enunciado ejercicio 10 bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var mostrarDescuento;

	importe=document.getElementById('txtIdImporte').value; 

	importe=parseInt(importe);

	resultado=importe*0.25;

	mostrarDescuento=importe-resultado;

	document.getElementById('txtIdResultado').value=mostrarDescuento;

}
