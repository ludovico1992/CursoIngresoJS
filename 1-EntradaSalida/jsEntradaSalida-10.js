/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"

Ludovico Faro - DIV X*/
function mostrarAumento()
{

	//Defino las variables

	let importe;
	let descuento;
	let importeConDescuento;

	// les asigno el valor

	importe= document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);

	descuento= importe * 25/100;

	importeConDescuento= importe - descuento;

	document.getElementById("txtIdResultado").value=importeConDescuento;


	
}
