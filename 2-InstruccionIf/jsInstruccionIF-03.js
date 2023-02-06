// Ludovico Faro DIV-X//


function mostrar()
{
	let edad;

	
	edad= document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);


	
	if(edad >=18)
{

	alert("Es mayor de edad");

}
if (edad<18){

alert ("Es menor de edad");

}

}