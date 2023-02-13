//Ludovico Faro - DIV X

function mostrar()
{
	let edad;

edad= parseInt(document.getElementById("txtIdEdad").value);

	if (edad<13)
{
	alert("Ud es un niño");

}
	else 
	{
		if (edad<18){
			alert("Ud es un adolescente");
		}
		else {
			alert("Ud es mayor de edad");
		}



	}}