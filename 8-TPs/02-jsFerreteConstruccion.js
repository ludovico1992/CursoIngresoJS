/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

Ludovico Faro - DIV X*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let rectanguloDeAlambre;
    //El resultado con las 3 vueltas de alambre //
    let TresHilos;


    largo= document.getElementById("txtIdLargo").value;
    largo=parseFloat(largo);

    ancho= document.getElementById("txtIdAncho").value;
    ancho=parseFloat(ancho);

    rectanguloDeAlambre= (largo + ancho)*2;
    rectanguloDeAlambre=parseInt(rectanguloDeAlambre);

    TresHilos= rectanguloDeAlambre*3;

    

    alert ("Cantidad de alambre a comprar: "+ TresHilos +"m")

}
function Circulo () 
{
    let radio;
    let diametro;
    let perimetro;
    let perimetrofinal;

    radio= document.getElementById("txtIdRadio").value;
    radio=parseFloat(radio);

    diametro= radio*2;
    diametro=parseFloat(diametro);

    perimetro= radio*diametro;
    perimetro=parseFloat(perimetro);

    perimetrofinal=perimetro*3;

    alert ("Cantidad de alambre a comprar: "+ perimetrofinal+"m");


	
}
function Materiales () 

{
    let ancho;
    let largo;
    let superficie;
    let calxmetro;
    let cementoxmetro;
    let cementofinal;
    let calfinal;


    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseFloat(ancho);

    largo=document.getElementById("txtIdLargo").value;
    largo=parseFloat(largo);

    superficie= ancho*largo;

    cementoxmetro=2;
    cementoxmetro=parseFloat(cementoxmetro);

    calxmetro=3;
    calxmetro=parseFloat(calxmetro);

    cementofinal= superficie*cementoxmetro;
    cementofinal=parseFloat(cementofinal);

    calfinal= superficie*calxmetro;
    calfinal=parseFloat(calfinal);

    alert ("Se necesitan: " + cementofinal +" bolsas de cemento y "+calfinal + " bolsas de cal" );

    
}