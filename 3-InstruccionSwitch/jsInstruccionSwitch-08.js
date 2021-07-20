/*
Autor: Abregú Mariela.
Enunciado Switch 08.
*/

function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado=document.getElementById("txtIdDestino").value;
    
    switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje="Hace Frio";
		    break;
		case "Cataratas":
			mensaje="Hace Calor";
		    break;
		case "Mar del plata":
			mensaje="Hace Calor";
		    break;
		case "Ushuaia":
			mensaje="Hace Frio";
		    break;
		default:
			mensaje="No existe información";	
	}
	alert(mensaje);
}