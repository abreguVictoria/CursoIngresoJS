/*
Autor: Abregú Mariela.
Enunciado IF 06.
*/

function mostrar()
{
	let edad;

    edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad<13){
        alert("es infante");
	}
	else{
        if(edad<18){
			alert("es adolescente");
		}
		else{
            if(edad>18){
				alert("es mayor");
			}
		}
	}


	/*if(edad<=12)
	{
        alert("es infante");
	}

	else if(edad<=17)
	{
		alert("es adolescente");
	}

	else 
	{
        alert("es mayor");
	}*/	
}