/*
Autor: Abregú Mariela.
Enunciado Switch 02.
*/

function mostrar()
{
	let mes;
	let mensaje;

	mes=document.getElementById("txtIdMes").value;
	

	switch(mes){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje="falta para el invierno";
			break;
		case "Julio":
		case "Agosto":
			mensaje="abrigate que hace frio";
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje="ya pasamos el invierno, ahora calor";
			break;

		/*default:
			mensaje="";
			break; en este caso no haría falta, ta que todos los meses tienen asignado un mensaje*/
	}
	alert(mensaje);
}