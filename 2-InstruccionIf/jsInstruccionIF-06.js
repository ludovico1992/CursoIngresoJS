//Ludovico Faro - DIV X

function mostrar()
{
	let edad;

edad= parseInt(document.getElementById("txtIdEdad").value);

if (edad<13)
{
	alert("Ud es un niño");

}
if (edad>=13 && edad <=17)
{
	alert ("Ud es un adolescente");
}
if (edad >17)
{

	alert("Ud es mayor de edad");
}

}