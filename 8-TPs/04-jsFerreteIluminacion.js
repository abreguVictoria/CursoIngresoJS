/*
Autor: Abregú Mariela.
Enunciado TP 04:
*/
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

function CalcularPrecio() 
{
    let precioLamparaUnidad=35;
    let cantidadLamparas;
    let marca;
    let porcentajeDescuento;
    let precioConDescuento;
    let iibb;
    let mensaje;
    

    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);

    marca=document.getElementById("Marca").value;

    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            porcentajeDescuento=0;
            break;
        case 3:
            if(marca=="ArgentinaLuz")
            {
                porcentajeDescuento=15;
            }
            else
            {
                if(marca=="FelipeLamparas")
                {
                    porcentajeDescuento=10;
                }
                else
                {
                    porcentajeDescuento=5;
                }
            }
            break;

        case 4:
            if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
            {
                porcentajeDescuento=25;
            }
            else
            {
                porcentajeDescuento=20;
            }
            break;

        case 5:
            if(marca=="ArgentinaLuz")
            {
                porcentajeDescuento=40;
            }
            else
            {
                porcentajeDescuento=30;
            }
            break;

        default:
            porcentajeDescuento=50;
            break;

    }

    precioConDescuento=precioLamparaUnidad-precioLamparaUnidad*porcentajeDescuento/100;

    precioFinal=precioConDescuento*cantidadLamparas;

    if(precioFinal>120)
    {
        iibb=precioFinal*10/100;
        precioFinal+=iibb;
        
        alert("total: $ "+precioFinal+" usted pagó: "+iibb+ " de ingresos brutos");
    }
    else
    {
        alert("total: $ "+precioFinal);
    }

    document.getElementById("txtIdprecioDescuento").value=precioFinal;
    
}


//parte A//

/*
function CalcularPrecio ()
{
    let precioLamparaUnidad=35;
    let cantidadLamparas;
    let marca;
    let porcentajeDescuento;
    let precioFinal;
    let precioConDescuento;
    let iibb;
    let mensaje;
    
    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);

    marca=document.getElementById("Marca").value;


    //parte A//   //////    SIN TERMINAR VERSION SOLO CON IF ////

    if(cantidadLamparas>5)
    {
        porcentajeDescuento=50;
    }

    //parte B//

    else
    {
        if(cantidadLamparas==5 &&  marca=="ArgentinaLuz")
        {
            porcentajeDescuento=40;
        }
        else
        {
            if(marca!="ArgentinaLuz")
            {
                    porcentajeDescuento=30;
            }
        }
            
    }
    if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
            {
                porcentajeDescuento=25;
            }
            else
            {
                porcentajeDescuento=20;
            }
            if(marca=="ArgentinaLuz")
            {
                porcentajeDescuento=15;
            }
            else
            {
                if(marca=="FelipeLamparas")
                {
                    porcentajeDescuento=10;
                }
                else
                {
                    porcentajeDescuento=5;
                }
            }        





    function CalcularPrecio ()
{
    let precioLamparaUnidad=35;
    let cantidadLamparas;
    let marca;
    let porcentajeDescuento;
    let precioFinal;
    let precioConDescuento;
    let iibb;
    let mensaje;
    
    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);

    marca=document.getElementById("Marca").value;
    
    
    
    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            porcentajeDescuento=0;
            break;

        case 3:
            if(marca=="ArgentinaLuz")
            {
                porcentajeDescuento=15;
            }
            else
            {
                if(marca=="FelipeLamparas")
                {
                    porcentajeDescuento=10;
                }
                else
                {
                    porcentajeDescuento=5;
                }
            }
            break;

        case 4:
            if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
            {
                porcentajeDescuento=25;
            }
            else
            {
                porcentajeDescuento=20;
            }
            break;

        case 5:
            if(marca=="ArgentinaLuz")
            {
                porcentajeDescuento=40;
            }
            else
            {
                porcentajeDescuento=30;
            }
            break;

        default:
            porcentajeDescuento=50;
            break;

    }

    precioConDescuento=precioLamparaUnidad-precioLamparaUnidad*porcentajeDescuento/100;

    document.getElementById("txtIdprecioDescuento").value=precioConDescuento;

    precioFinal=precioConDescuento*cantidadLamparas;

    if(precioFinal>120)
    {
        iibb=precioFinal*10/100;
        precioFinal+=iibb;
        
        alert("total: $ "+precioFinal+" usted pagó: "+iibb+ " de ingresos brutos");
    }
    else
    {
        alert("total: $ "+precioFinal);
    }



}*/