/*
Autor: Abregú Mariela.
Enunciado IF 09.
*/

function mostrar()
{
	let numeroRandom;
    let maximo=10;
	let minimo=1;

	numeroRandom=Math.round(Math.random()*(maximo-minimo)+minimo);
	
	alert(numeroRandom);	

}