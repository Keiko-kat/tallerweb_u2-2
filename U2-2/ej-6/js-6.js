function busca_letras(){
	//se le pude una frase al usuario
	var ingreso = prompt("Escriba una frase o palabra para analizar!");

	//se extrae el largo del ingreso
	var size = ingreso.length;

	//se crea un contador que cuenta las As
	var contador  = 0;

	//Se cuentan las As
	for (var i = 0 ; i < size; i++ ){


		if (ingreso.substr(i,1) == "a"){
			contador++;
		}
	}

	document.write("Hay un total de "+ contador+ " letras A en la frase:'" + ingreso+"'.");

}