/* 12. Escribe una función a la que le pasamos un año y devuelve true si es bisiesto. En el
programa principal, pídele al usuario un número y muestra en pantalla “El año … es bisiesto” o “El 
año … no es bisiesto” y sigue pidiendo números y diciendo si es o no bisiesto hasta que introduzca 
un 0. Un año es bisiesto si es divisible entre 4, pero no si es divisible entre 100 pero si es 
divisible entre 400 sí lo es.
*/
do {
   let numero = parseInt(window.prompt("Introduce un año:"))
    window.alert(esBisiesto(numero) ? "El año es biciesto" : "El año no es bisisesto")
}while (numero !== 0)

function esBisiesto(ano) {
  return (ano % 4 == 0 && ano % 100 !== 0 ) || ano % 400 == 0
}