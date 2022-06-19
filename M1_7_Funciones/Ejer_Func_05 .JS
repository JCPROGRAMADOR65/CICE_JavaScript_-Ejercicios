/* 5.  Escribe una función a la que le damos dos números y que devuelva true si el primer
número es más grande que el segundo número y false en el caso contrario. Pide dos números al 
usuario, y pasalos a la función. Muestra en consola “El primer número es más grande” o “El primer 
número no es más grande”.
*/

let num1 = parseInt(window.prompt("Introduce un numero:"))
let num2 = parseInt(window.prompt("Introduce otro numero:"))

esMayor(numl, num2)
? console.log("El primer numero es mayor")
: console.log("El primer numero no es mayor")


function esMayor(Arg1, Arg2) {
  return Arg1 > Arg2 // return devuelve lo que halla detras de si mismo//
  ? true // dato que devuelve la funcion.
  : false// dato que devuelve la funcion.
}