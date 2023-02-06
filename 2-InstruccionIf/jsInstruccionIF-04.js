//Ludovico Faro - DIV X -

function mostrar()
{
	let edad;

	edad= parseInt(document.getElementById("txtIdEdad").value);

	if(edad>=13){
	alert("Usted es adolescente");
	}
	
	if (edad <13){
		alert ("Usted no es adolescente");
	}

}