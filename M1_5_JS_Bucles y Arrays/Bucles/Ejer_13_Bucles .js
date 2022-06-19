/*13. Se desea conocer el lucky number (número de la suerte) de cualquier persona. El
número de la suerte se consigue reduciendo la fecha de nacimiento a un número de un
solo dígito. Por ejemplo, la fecha de nacimiento de Emma es la siguiente: 16-08-1973
16+8+1973=1997 1+9+9+7=26 2+6=8. El número de la suerte de Emma será el 8.*/

/* PLANTEO:
-pedimos fecha.
-trozos fecha a suma.
.cifras del resultado a suma.
-cifras hasta que solo quede 1.
*/

let fecha =window.prompt("Introduce tu fecha de nacimimiento (DD/MM/AAAA")

let num = parseInt(fecha.substring(0, 2))+parseInt(fecha.substring(3,5))+parseInt(fecha.substring(6)).toString()

let suma = num
let lucky = 0
let num2 = 0

do{
 for(let i = 0; 1 < num.length; i++){
  suma = parseInt(suma.toString(i,i+1))
}
 num = suma.toString()
} while (suma.length > 1)

console.log(suma)