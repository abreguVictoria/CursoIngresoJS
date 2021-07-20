/*
Autor: Abregú Mariela.
Enunciado Switch 09.
*/

function mostrar()
{
	let estacion;
	let destino;
	let precioBase=15000;
	let aumento=0;
	let descuento=0;
	let precioFinal;
	
	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			if(destino=="Bariloche")
			{
				aumento=20;
			}
			else
			{
				if(destino=="Mar del plata")
				{
					descuento=20;
				}
				else
				{
					descuento=10;
				}
			}			
			break;
		case "Verano":
			if(destino=="Bariloche")
			{
				descuento=20;
			}
			else
			{
				if(destino=="Mar del plata")
				{
					aumento=20;
				}
				else
				{
					aumento=10;
				}
			}	
			break;		
		case "Otoño":
		case "primavera":
			if(destino!="Cordoba")
			{
				aumento=10;
			}
			else
			{
				precioFinal=precioBase;
			}
			break;				
	}

	if(aumento!=0)
	{
		precioFinal=precioBase+precioBase*aumento/100;
	}
	else
	{
		if(descuento!=0)
	    {
		    precioFinal=precioBase-precioBase*descuento/100;
	    }
	}

	alert("el precio final: "+precioFinal);
	






	
	alert(estacionIngresada);

}//FIN DE LA FUNCIÓN