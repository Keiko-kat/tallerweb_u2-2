function conversion(){
	//se le pude una frase al usuario
	var ingreso = prompt("Ingrese 1 si desea cambiar dolares a pesos, ingrese 2 si desea cambiar pesos a dolares");

	//se comprueba que el ingreso sea valido
    while (ingreso != 1 && ingreso != 2){
        ingreso = prompt("opcion no valida, intentre nuevamente");
    }

    var dinero = prompt("Cuanto dinero quiere cambiar?");

    if (ingreso == 1){
        var converso = (dinero * 800);
        var moneda = "pesos";
    }
    if(ingreso == 2){
        var converso = (dinero / 800);
        var moneda = "dolares";
    }
    document.write("Con un valor de cambio de 800 CLP por Dolar, su dinero son "+converso+ " "+moneda);
	
}