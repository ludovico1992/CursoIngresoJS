//Ludovico Faro - DIV X

function mostrar()
{
	let edad;
	let estadoCivil;

	edad= parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil= document.getElementById("estadoCivil").value;

	if (estadoCivil== "Soltero" && edad>=18 )
	{

	
	alert("Es soltero y no es menor");
	}
	


}