//Ludovico Faro - DIV X -

function mostrar()
{
	let edad;

	edad= parseInt(document.getElementById("txtIdEdad").value);

	if(edad>13 && edad<18)
	{
	alert("Usted es adolescente");
	}
	else{

		alert("Usted no es adolescente.");
	    }
}