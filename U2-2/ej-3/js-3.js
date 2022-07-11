
//función para calcular cual numero es el mayor
function mayor(){

	//se piden los números al usuario
	var N1 = prompt("Ingrese el primer número");
	var N2 = prompt("Ingrese el segundo número");

	//Se indica el numero mayor
	if (N1 > N2) {
		document.write(N1+" es mayor que "+N2);
	} else {
		document.write(N2+" es mayor que "+N1);
	}
}



