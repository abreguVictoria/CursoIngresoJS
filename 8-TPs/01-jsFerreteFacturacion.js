/*
Autor: Abregú Mariela.
Enunciado TP 01:

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let productoUno;
    let productoDos;
    let productoTres;
    let resultadoSuma;

    productoUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    productoDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    productoTres=parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultadoSuma=productoUno+productoDos+productoTres;

    alert("el resultado de la suma de los productos es: "+resultadoSuma);

    

}
function Promedio () 
{
	let productoUno;
    let productoDos;
    let productoTres;
    let resultadoSuma;
    let promedio;

    productoUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    productoDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    productoTres=parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultadoSuma=productoUno+productoDos+productoTres;

    promedio=resultadoSuma/3;

    alert("el promedio es: "+promedio);




}
function PrecioFinal () 
{
	let productoUno;
    let productoDos;
    let productoTres;
    let resultadoSuma;
    let aumento;
    let precioFinal;
    
    productoUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    productoDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    productoTres=parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultadoSuma=productoUno+productoDos+productoTres;

    aumento=resultadoSuma*21/100;

    precioFinal=resultadoSuma+aumento;

    alert("el precio final es: "+precioFinal);
}