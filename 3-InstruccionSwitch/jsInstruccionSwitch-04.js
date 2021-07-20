/*
Autor: Abregú Mariela.
Enunciado Switch 04.
*/

function mostrar()
{
	let mes;
    let mensaje;

	mes=document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			mensaje="este mes tiene 28 dias";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
            mensaje="este mes tiene 30 dias";
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":		
		case "Julio":
		case "Agosto":		
		case "Octubre":		
		case "Diciembre":
			mensaje="este mes tiene 31 dias";
			break;	
	}
	alert(mensaje);
}