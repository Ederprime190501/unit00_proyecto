"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});

// Definición de constantes
var FMT_ENTERO = "0,0",
 FMT_NUMERO = "0,0.00",
 FMT_MONEDA = "$0,0.00",
 FMT_PORCENTAJE = "0.00%",

/*Declaracion de las variables con los valores de Moneda */
ValorM1 = 0.05,
ValorM2 = 0.10,
ValorM3 = 0.50,
ValorM4 = 1.00,
ValorM5 = 2.00,
ValorM6 = 5.00,
ValorM7 = 10.00,
ValorM8 = 20.00,

/*Declaracion de las variables con los valores de Billete */
ValorB1 = 20.00,
ValorB2 = 50.00,
ValorB3 = 100.00,
ValorB4 = 200.00,
ValorB5 = 500.00,
ValorB6 = 1000.00,

/*Declaracion de los id del formulario */
formularios = document.getElementById("formularios"),
billetes2 = document.getElementById("Billetes2"),
monedas2 = document.getElementById("Monedas2"),
total2 = document.getElementById("Total2");

// Se puede agregar una función a todas las instancias del objeto Node.
Node.prototype.error = function (mensaje) {
    this.className = "error";
    this.textContent = mensaje;
};
Node.prototype.info = function (mensaje) {
    this.className = "";
    this.textContent = mensaje;
};

function form(){
/*Declaracion de las variables de moneda */
var coins1 = parseFloat(formularios["coin1"].value),
     coins2 = parseFloat(formularios["coin2"].value),
     coins3 = parseFloat(formularios["coin3"].value),
     coins4 = parseFloat(formularios["coin4"].value),
     coins5 = parseFloat(formularios["coin5"].value),
     coins6 = parseFloat(formularios["coin6"].value),
     coins7 = parseFloat(formularios["coin7"].value),
     coins8 = parseFloat(formularios["coin8"].value);
/*Declaracion de las variables billete */
var tickets1 = parseFloat(formularios["ticket1"].value),
     tickets2 = parseFloat(formularios["ticket2"].value),
     tickets3 = parseFloat(formularios["ticket3"].value),
     tickets4 = parseFloat(formularios["ticket4"].value),
     tickets5 = parseFloat(formularios["ticket5"].value),
     tickets6 = parseFloat(formularios["ticket6"].value);

var error = false;

if(!error){
      /*Multiplicaciones de monedas */
      var multiplicacionMoneda1 = new BigNumber(coins1).times(new BigNumber(ValorM1)),
           multiplicacionMoneda2 = new BigNumber(coins2).times(new BigNumber(ValorM2)),
           multiplicacionMoneda3 = new BigNumber(coins3).times(new BigNumber(ValorM3)),
           multiplicacionMoneda4 = new BigNumber(coins4).times(new BigNumber(ValorM4)),
           multiplicacionMoneda5 = new BigNumber(coins5).times(new BigNumber(ValorM5)),
           multiplicacionMoneda6 = new BigNumber(coins6).times(new BigNumber(ValorM6)),
           multiplicacionMoneda7 = new BigNumber(coins7).times(new BigNumber(ValorM7)),
           multiplicacionMoneda8 = new BigNumber(coins8).times(new BigNumber(ValorM8));

     /*Multiplicaciones de Billtes */
     var multiplicacionBillete1 = new BigNumber(tickets1).times(new BigNumber(ValorB1)),
          multiplicacionBillete2 = new BigNumber(tickets2).times(new BigNumber(ValorB2)),
          multiplicacionBillete3 = new BigNumber(tickets3).times(new BigNumber(ValorB3)),
          multiplicacionBillete4 = new BigNumber(tickets4).times(new BigNumber(ValorB4)),
          multiplicacionBillete5 = new BigNumber(tickets5).times(new BigNumber(ValorB5)),
          multiplicacionBillete6 = new BigNumber(tickets6).times(new BigNumber(ValorB6));

    /*Suma de Monedas */
     var sumaM1 = new BigNumber(multiplicacionMoneda1).plus(new BigNumber(multiplicacionMoneda2)),
          sumaM2 = new BigNumber(multiplicacionMoneda3).plus(new BigNumber(multiplicacionMoneda4)),
          sumaM3 = new BigNumber(multiplicacionMoneda5).plus(new BigNumber(multiplicacionMoneda6)),
          sumaM4 = new BigNumber(multiplicacionMoneda7).plus(new BigNumber(multiplicacionMoneda8));

     var sumaCoins1 = new BigNumber(sumaM1).plus(new BigNumber(sumaM2)),
          sumaCoins2 = new BigNumber(sumaM3).plus(new BigNumber(sumaM4));

     var sumaTotalMoendas = new BigNumber(sumaCoins1).plus(new BigNumber(sumaCoins2));
       
    /*Suma de billetes */
    var sumaB1 = new BigNumber(multiplicacionBillete1).plus(new BigNumber(multiplicacionBillete2)),
         sumaB2 = new BigNumber(multiplicacionBillete3).plus(new BigNumber(multiplicacionBillete4)),
         sumaB3 = new BigNumber(multiplicacionBillete5).plus(new BigNumber(multiplicacionBillete6));

    var sumaTicket1 = new BigNumber(sumaB1).plus(new BigNumber(sumaB2)),
         sumaTicket2 = new BigNumber(sumaB3).plus(new BigNumber(sumaTicket1));

    var sumaTotalBilletes = new BigNumber(sumaTicket1).plus(new BigNumber(sumaTicket2));

    var sumaTotal = new BigNumber(sumaTotalMoendas).plus(new BigNumber(sumaTotalBilletes));

    billetes2.info(numeral(sumaTotalBilletes).format(FMT_MONEDA));
    monedas2.info(numeral(sumaTotalMoendas).format(FMT_MONEDA));
    total2.info(numeral(sumaTotal).format(FMT_MONEDA));

    }
}
function clear(){
    billetes2.info("");
    monedas2.info("");
    total2.info("");

    formularios["coin1"].value="";
    formularios["coin2"].value="";
    formularios["coin3"].value="";
    formularios["coin4"].value="";
    formularios["coin5"].value="";
    formularios["coin6"].value="";
    formularios["coin7"].value="";
    formularios["coin8"].value="";

    formularios["ticket1"].value="";
    formularios["ticket2"].value="";
    formularios["ticket3"].value="";
    formularios["ticket4"].value="";
    formularios["ticket5"].value="";
    formularios["ticket6"].value="";
}