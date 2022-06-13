/*6.  Escribe un programa que pida un número y muestre ese número al cuadrado y al
cubo (multiplicado por sí mismo dos y tres veces). Si el número es menor que 1, no calcules el cubo 
ni el cuadrado.*/

let = num = parseInt(window.prompt("introduce un numero:")) // pide numero 1

num < 1
?console.log("No se calcula nada, por que has puesto un numero negativo.!")
:console.log(`El cuadro de ${num} es ${num**2} y l cubo es ${num**3}`)

// tambien es valido con un if, else.
