/*
Autor: Abregú Mariela.
Enunciado IF 05.
*/
function mostrar()
{
    let edad;

    edad=parseInt(document.getElementById("txtIdEdad").value);

    /*if(edad>=18 || edad<=12)
    {
        alert("usted no es adolescente");
    }*/

    if(!(edad>=18 && edad<=12))
    {
        alert("usted no es adolescente");
    }
}