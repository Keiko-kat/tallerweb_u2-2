function par(){

	//Se pide un ingreso al usuario
	var N = prompt("Que numero desea confirmar?");
	//Se confirma si es par o no
	if(N%2 == 0){
		document.write("El numero "+N+ " es divisible por 2 " );
	}else{
		document.write("El numero "+N+"  NO es divisible por 2 " );
	}
}