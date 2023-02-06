/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Ludovico Faro- DIV X*/
function mostrarAumento()
{
	//Defino las 3 primeras variables que voy a utilizar.
	let sueldo;
	//El sueldoaumentado seria el resultado.
	let sueldoAumentado;
	//Tengo que utilizar una variable exclusiva para el porcentaje que luego voy a sumarle al sueldo.
	let aumento;

	sueldo=document.getElementById("txtIdSueldo").value;
	//Utilizo parseFloat ya que puede dar con decimales.
	sueldo=parseFloat(sueldo);

	aumento= sueldo * 10/100;

	sueldoAumentado= sueldo+aumento;

// La variable sueldoAumentado se encuentra a la derecha ya que es un dato de SALIDA, que es lo que quiero mostrar en el cuadro de texto//
   document.getElementById("txtIdResultado").value = sueldoAumentado;


}
