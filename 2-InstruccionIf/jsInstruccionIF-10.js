//Ludovico Faro - DIV

function mostrar()
{	let numeroAleatorio;
	let vMaximo;
	let vMinimo;

	vMaximo=10;
	vMinimo=1;

	numeroAleatorio=Math.round( Math.random() * (vMaximo - vMinimo) + vMinimo); 
		
	if (numeroAleatorio >=9) {
		alert ("Excelente "+numeroAleatorio);
	}
	else {
	}
	if (numeroAleatorio <4){
	alert("Vamos la proxima se puede " +numeroAleatorio);
	}
	else {
	alert ("Aprobo "+numeroAleatorio);
	}
}