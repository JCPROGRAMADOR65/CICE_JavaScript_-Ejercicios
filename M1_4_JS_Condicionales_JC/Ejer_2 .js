/*2.  Pide por teclado la edad del usuario. Si la edad es igual o inferior a 8 mostramos el
mensaje "Pasa al tobogán", si no mostramos "Eres demasiado mayor para usar el tobogán".
*/

let  edad = parseInt(window.prompt("introduce tu edad")) // pide edad.se utiliza parseInt para que nos devuelva un numero.
edad <= 8 // operador ternario, es booleano, solo tenemos dos opciones.
? console.log("Pasa al tobogan")
: console.log("Eres mayor para usar el tobogan")



