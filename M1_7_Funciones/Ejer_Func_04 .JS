/*4. Escribe una función que devuelva el resultado de sumar los dos parámetros que le
pasamos. Pide al usuario 2 números. Usa esos 2 números como parámetros de la
función y después asigna el valor que devuelve la función a una tercera variable.
Finalmente, muestra el valor de la variable en la consola
*/

let num1 = parseInt(window.prompt("Introduce un numero:"))
let num2 = parseInt(window.prompt("Introduce otro numero:"))

let num3 = 0
sumaFuncion(num1, num2)

function sumaFuncion(Arg1, Arg2) {
  num3 = Arg1+Arg2
console.log(num3)
}

