
//función que suma dos números
function suma(){

	//se piden los números al usuario
	var N1 = prompt("Ingrese el primer número");
	var N2 = prompt("Ingrese el segundo número");

	//imprime la suma 
	document.write("El resultado de "+N1+"+"+N2+" es: "+ ( parseInt(N1)+ parseInt(N2) ) );
}