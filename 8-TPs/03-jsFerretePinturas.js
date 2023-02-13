/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").

Ludovico Faro - DIV X
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let resultadofinal;

    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseFloat(temperatura);

    resultadofinal= (((temperatura-32)*5)/9);
    resultadofinal=parseFloat(resultadofinal);
    resultadofinal= resultadofinal.toFixed(2)


    alert(temperatura+"° Fahrenheit son: "+resultadofinal+ "° centigrados")
}

function CentigradosFahrenheit () 
{
	let temperatura;
    let resultadofinal;

    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseFloat(temperatura);

    resultadofinal= (((temperatura*9)/5)+32);
    resultadofinal= resultadofinal.toFixed(2)
 
    alert(temperatura+"° centigrados son: "+resultadofinal+ "° Fahrenheit");


}
