
//función para calcular cual numero es el mayor
function mayor(){

	//se piden los números al usuario
	var N1 = prompt("Ingrese el primer número");
	var N2 = prompt("Ingrese el segundo número");
	var N3 = prompt("Ingrese el tercer número");

	//Se indica el numero mayor
	if (N1 > N2) {
		if (N1 > N3){
            document.write(N1+" es mayor que "+N2+" y "+N3)
        } else{
            document.write(N3+" es mayor que "+N2+" y "+N1)
        }
	} else {
		if (N2 > N3){
            document.write(N2+" es mayor que "+N1+" y "+N3)
        } else{
            document.write(N3+" es mayor que "+N2+" y "+N1)
        }
	}
}



