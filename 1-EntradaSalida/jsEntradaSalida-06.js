/*
Autor: Abregú Mariela.
Enunciado: ejercicio 06.

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{
	let numeroUno;
    let numeroDos;
    let resultado;
    
    /*puedo pedir el dato por Id y luedo parsearlo. 
    son 2 pasos:

    numeroUno=document.getElementById("txtIdNumeroUno").value;
    numeroUno=parseInt(numeroUno);*/

    /*puedo resumir el codigo insertando getElementById 
    dentro de los paréntesis del parseInt. es 1 paso*/

    numeroUno=parseInt(document.getElementById("txtIdNumeroUno").value);
    numeroDos=parseInt(document.getElementById("txtIdNumeroDos").value);

    /*no es recomendable mezclar las tecnicas del ejemplo, se usa 
    una u otra opción*/

    resultado=numeroUno+numeroDos;

    alert("el resultado de la suma es: "+resultado);

    
}

