"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});

// Definición de constantes
var FMT_ENTERO = "0,0",
 FMT_NUMERO = "0,0.00",
 FMT_MONEDA = "$0,0.00",
 FMT_PORCENTAJE = "0.00%",

 /*Definir las variables con los valores correspondientes a cada input de moneda*/
 valor_moneda1 = 0.05,
 valor_moneda2 = 0.10,
 valor_moneda3 = 0.50,
 valor_moneda4 = 1.0,
 valor_moneda5 = 2.0,
 valor_moneda6 = 5.0,
 valor_moneda7 = 10.0,
 valor_moneda8 = 20.0,

 /*Definir las variables con los valores correspondientes a cada input de billete*/
 valor_billete1 = 20,
 valor_billete2 = 50,
 valor_billete3 = 100,
 valor_billete4 = 200,
 valor_billete5 = 500,
 valor_billete6 = 1000,

 /*Definir las variables para la salida de los resultados*/
 forma = document.getElementById("forma"),
 salidaMonedas = document.getElementById("salidaMonedas"),
 salidaBilletes = document.getElementById("salidaBilletes"),
 salidaTotal = document.getElementById("salidaTotal");

 // Se puede agregar una función a todas las instancias del objeto Node.
Node.prototype.error = function (mensaje) {
    this.className = "error";
    this.textContent = mensaje;
};
Node.prototype.info = function (mensaje) {
    this.className = "";
    this.textContent = mensaje;
};
 /*Definir la funcion procesar*/
 function procesar(){
     /*Declaracion de las variables moneda */
     var m1 = parseFloat(forma["moneda1"].value),
         m2 = parseFloat(forma["moneda2"].value),
         m3 = parseFloat(forma["moneda3"].value),
         m4 = parseFloat(forma["moneda4"].value),
         m5 = parseFloat(forma["moneda5"].value),
         m6 = parseFloat(forma["moneda6"].value),
         m7 = parseFloat(forma["moneda7"].value),
         m8 = parseFloat(forma["moneda8"].value);

     /*Declaracion de las variables billete */
     var b1 = parseFloat(forma["billete1"].value),
         b2 = parseFloat(forma["billete2"].value),
         b3 = parseFloat(forma["billete3"].value),
         b4 = parseFloat(forma["billete4"].value),
         b5 = parseFloat(forma["billete5"].value),
         b6 = parseFloat(forma["billete6"].value);

     var error = false;

     if(!error){
         /*Variables con la mutliplicacion de los valores moneda */
         var multi = new BigNumber(m1).times(new BigNumber(valor_moneda1)),
             multi2 = new BigNumber(m2).times(new BigNumber(valor_moneda2)),
             multi3 = new BigNumber(m3).times(new BigNumber(valor_moneda3)),
             multi4 = new BigNumber(m4).times(new BigNumber(valor_moneda4)),
             multi5 = new BigNumber(m5).times(new BigNumber(valor_moneda5)),
             multi6 = new BigNumber(m6).times(new BigNumber(valor_moneda6)),
             multi7 = new BigNumber(m7).times(new BigNumber(valor_moneda7)),
             multi8 = new BigNumber(m8).times(new BigNumber(valor_moneda8));

         /*Variables con la mutliplicacion de los valores billete */
         var multiB = new BigNumber(b1).times(new BigNumber(valor_billete1)),
             multiB2 = new BigNumber(b2).times(new BigNumber(valor_billete2)),
             multiB3 = new BigNumber(b3).times(new BigNumber(valor_billete3)),
             multiB4 = new BigNumber(b4).times(new BigNumber(valor_billete4)),
             multiB5 = new BigNumber(b5).times(new BigNumber(valor_billete5)),
             multiB6 = new BigNumber(b6).times(new BigNumber(valor_billete6));

         /*Operaciones de suma de variables monedas */
         var sumaMoneda = new BigNumber(multi).plus(new BigNumber(multi2)),
             sumaMoneda2 = new BigNumber(multi3).plus(new BigNumber(multi4)),
             sumaMoneda3 = new BigNumber(multi5).plus(new BigNumber(multi6)),
             sumaMoneda4 = new BigNumber(multi7).plus(new BigNumber(multi8));

         var sumaModenaF = new BigNumber(sumaMoneda).plus(new BigNumber(sumaMoneda2)),
             sumaMonedaf2 = new BigNumber(sumaMoneda3).plus(new BigNumber(sumaMoneda4));

         var sumaFinalMoneda = new BigNumber(sumaModenaF).plus(new BigNumber(sumaMonedaf2));

         /*Operaciones de suma de variables billetes */
         var sumaBillete = new BigNumber(multiB).plus(new BigNumber(multiB2)),
             sumaBillete2 = new BigNumber(multiB3).plus(new BigNumber(multiB4)),
             sumaBillete3 = new BigNumber(multiB5).plus(new BigNumber(multiB6));

         var sumaBilleteF = new BigNumber(sumaBillete).plus(new BigNumber(sumaBillete2)),
             sumaBilleteFinal = new BigNumber(sumaBillete3).plus(new BigNumber(sumaBilleteF));
         
         var sumaTotal  = new BigNumber(sumaFinalMoneda).plus(new BigNumber(sumaBilleteFinal));

         /*Salidas de datos*/
         salidaMonedas.info(numeral(sumaFinalMoneda).format(FMT_MONEDA));
         salidaBilletes.info(numeral(sumaBilleteFinal).format(FMT_MONEDA));
         salidaTotal.info(numeral(sumaTotal).format(FMT_MONEDA));
     }
 }

 /*Definir la funcion limapiar */
 function vaciar(){
 
    salidaMonedas.info("");
    salidaBilletes.info("");
    salidaTotal.info("");
    forma["moneda1"].value="";
    forma["moneda2"].value="";
    forma["moneda3"].value="";
    forma["moneda4"].value="";
    forma["moneda5"].value="";
    forma["moneda6"].value="";
    forma["moneda7"].value="";
    forma["moneda8"].value="";

    forma["billete1"].value="";
    forma["billete2"].value="";
    forma["billete3"].value="";
    forma["billete4"].value="";
    forma["billete5"].value="";
    forma["billete6"].value="";

 }