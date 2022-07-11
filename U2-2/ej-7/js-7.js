function busca_letras(){
	//se le pude una frase al usuario
	var ingreso = prompt("Escriba una frase o palabra para analizar!");

	//se extrae el largo del ingreso
	var size = ingreso.length;


	//Se imprimen las vocales directamente
	for (var i = 0 ; i < size; i++ ){
		if (ingreso.substr(i,1) == "a"){
			document.write(texto.substr(i,1), " ");
		}
		if (ingreso.substr(i,1) == "e"){
			document.write(texto.substr(i,1), " ");
		}
		if (ingreso.substr(i,1) == "i"){
			document.write(texto.substr(i,1), " ");
		}
		if (ingreso.substr(i,1) == "o"){
			document.write(texto.substr(i,1), " ");
		}
		if (ingreso.substr(i,1) == "u"){
			document.write(texto.substr(i,1), " ");
		}
	}

	
}