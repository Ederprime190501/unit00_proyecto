"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});

// Definición de constantes
var FMT_ENTERO = "0,0",
 FMT_NUMERO = "0,0.00",
 FMT_MONEDA = "$0,0.00",
 FMT_PORCENTAJE = "0.00%",

/*Declaracion de las variables con los valores de Moneda */
monedaValor1 = 0.05,
monedaValor2 = 0.10,
monedaValor3 = 0.50,
monedaValor4 = 1.00,
monedaValor5 = 2.00,
monedaValor6 = 5.00,
monedaValor7 = 10.00,
monedaValor8 = 20.00,

/*Declaracion de las variables con los valores de Billete */
billeteValor1 = 20.00,
billeteValor2 = 50.00,
billeteValor3 = 100.00,
billeteValor4 = 200.00,
billeteValor5 = 500.00,
billeteValor6 = 1000.00,

/*Declaracion de los id del formulario */
formulario = document.getElementById("formulario"),
billetes = document.getElementById("Billetes"),
monedas = document.getElementById("Monedas"),
total = document.getElementById("Total");

 // Se puede agregar una función a todas las instancias del objeto Node.
 Node.prototype.error = function (mensaje) {
    this.className = "error";
    this.textContent = mensaje;
};
Node.prototype.info = function (mensaje) {
    this.className = "";
    this.textContent = mensaje;
};

function proceso(){
    /*Declaracion de las variables Monedas */
    var monedas1 = parseFloat(formulario["coins1"].value),
         monedas2 = parseFloat(formulario["coins2"].value),
         monedas3 = parseFloat(formulario["coins3"].value),
         monedas4 = parseFloat(formulario["coins4"].value),
         monedas5 = parseFloat(formulario["coins5"].value),
         monedas6 = parseFloat(formulario["coins6"].value),
         monedas7 = parseFloat(formulario["coins7"].value),
         monedas8 = parseFloat(formulario["coins8"].value);

    /*Declaracion de las variables Billetes */
    var billetes1 = parseFloat(formulario["tickets1"].value),
         billetes2 = parseFloat(formulario["tickets2"].value),
         billetes3 = parseFloat(formulario["tickets3"].value),
         billetes4 = parseFloat(formulario["tickets4"].value),
         billetes5 = parseFloat(formulario["tickets5"].value),
         billetes6 = parseFloat(formulario["tickets6"].value);

    var error = false;

    if(!error){
        /*Multiplicaciones de monedas */
        var mutliplicacionM1 = new BigNumber(monedas1).times(new BigNumber(monedaValor1)),
             mutliplicacionM2 = new BigNumber(monedas2).times(new BigNumber(monedaValor2)),
             mutliplicacionM3 = new BigNumber(monedas3).times(new BigNumber(monedaValor3)),
             mutliplicacionM4 = new BigNumber(monedas4).times(new BigNumber(monedaValor4)),
             mutliplicacionM5 = new BigNumber(monedas5).times(new BigNumber(monedaValor5)),
             mutliplicacionM6 = new BigNumber(monedas6).times(new BigNumber(monedaValor6)),
             mutliplicacionM7 = new BigNumber(monedas7).times(new BigNumber(monedaValor7)),
             mutliplicacionM8 = new BigNumber(monedas8).times(new BigNumber(monedaValor8));

        /*Multiplicaciones de Billtes */
        var mutliplicacionB1 = new BigNumber(billetes1).times(new BigNumber(billeteValor1)),
             mutliplicacionB2 = new BigNumber(billetes2).times(new BigNumber(billeteValor2)),
             mutliplicacionB3 = new BigNumber(billetes3).times(new BigNumber(billeteValor3)),
             mutliplicacionB4 = new BigNumber(billetes4).times(new BigNumber(billeteValor4)),
             mutliplicacionB5 = new BigNumber(billetes5).times(new BigNumber(billeteValor5)),
             mutliplicacionB6 = new BigNumber(billetes6).times(new BigNumber(billeteValor6));

        /*Suma de Monedas */
        var sumaM1 = new BigNumber(mutliplicacionM1).plus(new BigNumber(mutliplicacionM2)),
             sumaM2 = new BigNumber(mutliplicacionM3).plus(new BigNumber(mutliplicacionM4)),
             sumaM3 = new BigNumber(mutliplicacionM5).plus(new BigNumber(mutliplicacionM6)),
             sumaM4 = new BigNumber(mutliplicacionM7).plus(new BigNumber(mutliplicacionM8));

        var sumaMoneda1 = new BigNumber(sumaM1).plus(new BigNumber(sumaM2)), 
             sumaMoneda2 = new BigNumber(sumaM3).plus(new BigNumber(sumaM4));

        var sumaMonedas = new BigNumber(sumaMoneda1).plus(new BigNumber(sumaMoneda2));

        /*Suma de Billetes */
        var sumaB1 = new BigNumber(mutliplicacionB1).plus(new BigNumber(mutliplicacionB2)),
             sumaB2 = new BigNumber(mutliplicacionB3).plus(new BigNumber(mutliplicacionB4)),
             sumaB3 = new BigNumber(mutliplicacionB5).plus(new BigNumber(mutliplicacionB6));

        var sumaBillete1 = new BigNumber(sumaB1).plus(new BigNumber(sumaB2)),
             sumaBillete2 = new BigNumber(sumaB3).plus(new BigNumber(sumaBillete1));

        var sumaBilletes = new BigNumber(sumaBillete1).plus(new BigNumber(sumaBillete2));

        /*Suma de Totales */

        var sumaTotales = new BigNumber(sumaMonedas).plus(new BigNumber(sumaBilletes));

        monedas.info(numeral(sumaMonedas).format(FMT_MONEDA));
        billetes.info(numeral(sumaBilletes).format(FMT_MONEDA));
        total.info(numeral(sumaTotales).format(FMT_MONEDA));

    }
}

function limpiar(){
 
     monedas.info("");
     billetes.info("");
     total.info("");

     formulario["coins1"].value="";
     formulario["coins2"].value="";
     formulario["coins3"].value="";
     formulario["coins4"].value="";
     formulario["coins5"].value="";
     formulario["coins6"].value="";
     formulario["coins7"].value="";
     formulario["coins8"].value="";
 
     formulario["tickets1"].value="";
     formulario["tickets2"].value="";
     formulario["tickets3"].value="";
     formulario["tickets4"].value="";
     formulario["tickets5"].value="";
     formulario["tickets6"].value="";
     
 
  }
