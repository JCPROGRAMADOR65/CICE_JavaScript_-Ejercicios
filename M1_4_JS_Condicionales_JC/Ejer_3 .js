/*3.  Escribe un programa que pida al usuario 3 números. Si el resultado de la suma de
los dos primeros es igual al tercer número, mostrarlo en pantalla, si no mostrar que el tercero no 
es la suma de los dos anteriores.*/

let = num1 = parseInt(window.prompt("introduce un numero:")) // pide numero 1
let = num2 = parseInt(window.prompt("introduce segundo:")) // pide numero 2
let = num3 = parseInt(window.prompt("introduce tercer numero:")) // pide numero 3

console.log(num1 + num2)
console.log(num1 + num2)

// enunciado contempla dos salidas, usamos operador ternario.
(num1 + num2) == num3
? console.log("resultado de suma de los primeros numeros es igual al tercero")
: console.log("El tercer numero no es la suma de los dos anteriores")

