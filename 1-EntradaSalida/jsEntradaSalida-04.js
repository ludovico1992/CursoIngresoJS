/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
Ludovico Faro- DIV X*/
function mostrar()
{
	let nombre;
	nombre= prompt("Ingrese su nombre");
	document.getElementById("txtIdNombre").value = nombre;
}
