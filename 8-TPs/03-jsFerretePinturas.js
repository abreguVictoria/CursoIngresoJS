/*3.	
Autor: Abregú Mariela.
Enunciado TP 02:

Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
    let centigrados;
    const RESTAR_A_FARENHEIT=32;
    const DIVISOR_RESULTADO_RESTA=1.8;

    fahrenheit=parseFloat(document.getElementById("txtIdTemperatura").value);
    
    centigrados=(fahrenheit-RESTAR_A_FARENHEIT)/DIVISOR_RESULTADO_RESTA;

    alert(fahrenheit+" grados farenheit equivalen a: "+centigrados.toFixed(2)+" grados centígrados");
}

function CentigradosFahrenheit () 
{
	let centigrados;
    let fahrenheit;
    const MULTIPLICAR_CENTIGRADOS=1.8;
    const SUMAR_RESULTADO_MULTIPLICACION=32;

    centigrados=parseFloat(document.getElementById("txtIdTemperatura").value);

    fahrenheit=centigrados*(MULTIPLICAR_CENTIGRADOS)+SUMAR_RESULTADO_MULTIPLICACION;

    alert(centigrados+" grados centigrados equivalen a: "+fahrenheit.toFixed(2)+" grados farenheit");

}
