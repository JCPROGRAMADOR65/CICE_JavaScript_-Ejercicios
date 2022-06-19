/* 7. Diseña una función esPar() que reciba como parámetro un número y devuelva si ese número es par o 
no. Utilízalo en un programa que lea un número por prompt y determine si es par o no y muestre un 
mensaje al respecto en un alert.
*/

let num = parseInt(window.prompt("Introduce un numero:"))

window.alert(esPar(num) 
? "El numero es par" 
: "El numero es impar")

function esPar(Arg1) {
  return Arg1 % 2 == 0
}

