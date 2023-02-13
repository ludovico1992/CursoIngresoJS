// Ludovico Faro - DIV X

function mostrar()
{
	
	let mes;
	mes= document.getElementById("txtIdMes").value;

	switch(mes){
		case ("Febrero"):
			alert("Este mes tiene menos de 29 dias");
			break;

		default:
			alert ("Este mes tiene 30 dias o mas dias.");
		break;



	}
	
	


}//FIN DE LA FUNCIÓN