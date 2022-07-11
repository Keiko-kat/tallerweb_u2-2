function busca_letras(){
	//se le pude una frase al usuario
	var ingreso = prompt("Escriba una frase o palabra para analizar!");

	//se extrae el largo del ingreso
	var size = ingreso.length;

	//se crean contadores que cuentan las vocales
	var C_A  = 0;
	var C_E  = 0;
	var C_I  = 0;
	var C_O  = 0;
	var C_U  = 0;

	//Se cuentan las vocales
	for (var i = 0 ; i < size; i++ ){
		if (ingreso.substr(i,1) == "a"){
			C_A++;
		}
		if (ingreso.substr(i,1) == "e"){
			C_E++;
		}
		if (ingreso.substr(i,1) == "i"){
			C_I++;
		}
		if (ingreso.substr(i,1) == "o"){
			C_O++;
		}
		if (ingreso.substr(i,1) == "u"){
			C_U++;
		}
	}

	document.write("Hay un total de "+ C_A+ " As, "+C_E+" Es, "+C_I+" Is, "+C_O+" Os y "+C_U+" Us en la frase: '" + ingreso+"'.");

}