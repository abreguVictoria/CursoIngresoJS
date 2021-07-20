/*Autor: Abregú Mariela.
Enunciado IF 04.*/

function mostrar()
{
	let edad;
	
	edad=parseInt(document.getElementById("txtIdEdad").value);
	
	/*if(edad>=13)
    {
		if(edad<=17)
		{
			alert("es adolescente");
		}	
	}*/
    
	//para no anidar if's, puedo utilizar el operador logico and &&//
	
	if(edad>=13 && edad<=17)
    {
    alert("es adolescente");	
	}
}