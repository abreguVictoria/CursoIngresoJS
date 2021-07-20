/*
Autor: Abregú Mariela.
Enunciado IF 03.
*/
function mostrar()
{
	let edad;

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad>=18){
		alert("usted es mayor de edad");
	}

    /*if(edad<18)
	{
        alert("usted es menor de edad");
	}*/

	else{alert("usted es menor de edad");}
}