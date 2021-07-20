/*
Autor: Abregú Mariela.
Enunciado Switch 01.
*/

function mostrar() 
{
    let mes;
	let mensaje;

	mes=document.getElementById("txtIdMes").value;


	switch(mes){
        case "Enero":
			mensaje="que comiences bien el año";
			break;
		case "Marzo":
		    mensaje="comienzan las clases";	
			break;
		case "Julio":
		    mensaje="se vienen las vacaciones";
			break;
		case "Diciembre":
			mensaje="felices fiestas";
			break; 
		default:
			mensaje="";
		    break;	
	}
	alert(mensaje);
}