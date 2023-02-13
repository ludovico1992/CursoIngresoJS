/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

Ludovico Faro- -DIV X*/
function Sumar () 
{
	let producto1;
    let producto2;
    let producto3;
    let suma;

    producto1=document.getElementById("txtIdPrecioUno").value;
    producto1=parseFloat(producto1);

    producto2=document.getElementById("txtIdPrecioDos").value;
    producto2=parseFloat(producto2);

    producto3=document.getElementById("txtIdPrecioTres").value;
    producto3=parseFloat(producto3);


    suma= producto1+producto2+producto3;

    alert("la suma es: "+suma);


}
function Promedio () 
{
    let producto1;
    let producto2;
    let producto3;
    let promedio;
    
    producto1=document.getElementById("txtIdPrecioUno").value;
    producto1=parseFloat(producto1);
 
    producto2=document.getElementById("txtIdPrecioDos").value;
    producto2=parseFloat(producto2);

    producto3=document.getElementById("txtIdPrecioTres").value;
    producto3=parseFloat(producto3);

    promedio= (producto1+producto2+producto3)/3;
    promedio.toFixed(2);

    alert ("El promedio es: "+promedio);

}
function PrecioFinal () 
{
    let producto1;
    let producto2;
    let producto3;
    let IVA;
    let resultadoIvaIncluido;

	producto1=document.getElementById("txtIdPrecioUno").value;
    producto1=parseFloat(producto1);

    producto2=document.getElementById("txtIdPrecioDos").value;
    producto2=parseFloat(producto2);


    producto3=document.getElementById("txtIdPrecioTres").value;
    producto3=parseFloat(producto3);

    IVA = 1.21;
    IVA=parseFloat(IVA);

    resultadoIvaIncluido= (producto1+producto2+producto3)*IVA;
    resultadoIvaIncluido.toFixed(2);
    alert("El precio total con IVA incluido es: "+resultadoIvaIncluido);




}