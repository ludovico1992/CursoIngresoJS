// Ludovico Faro - DIV X //

function mostrar()
{
	let numeroAleatorio;
	let numMaximo;
	let numMinimo;

	numMaximo=10;
	numMinimo=1;

	numeroAleatorio=Math.round(Math.random()*(numMaximo-numMinimo)+numMinimo);
	
	alert(numeroAleatorio);	

}//FIN DE LA FUNCIÓN