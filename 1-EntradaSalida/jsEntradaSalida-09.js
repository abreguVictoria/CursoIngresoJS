/*
autor: Abregú Mariela.
enunciado: ejercicio 9 bis.
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var resultado;
	var mostrarAumento;
	var porcentaje;

	sueldo=document.getElementById('txtIdSueldo').value;

	sueldo=parseInt(sueldo);

	porcentaje=prompt("por favor ingrese el porcentaje deseado");

	porcentaje=parseInt(porcentaje);

	resultado=sueldo*porcentaje/100;

	mostrarAumento=sueldo+resultado;

	document.getElementById('txtIdResultado').value=mostrarAumento;


}
