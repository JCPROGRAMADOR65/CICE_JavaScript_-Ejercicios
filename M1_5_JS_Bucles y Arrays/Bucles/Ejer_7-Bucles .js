/*7. Escribe un programa que pida valores. Si introduce un valor negativo, mostrar un
mensaje diciendo que se ignoran los valores negativos.Seguir pidiendo hasta que el
usuario introduzca un 0, entonces mostrar la suma de los valores introducidos.
*/

let suma = 0

do {
 let numero = parseInt(window.prompt("Introduce un numero:"))

 /*numero > 0
 ? suma += numero
 : numero == 0
 ? window.alert(suma)// esto es concatenar ternarios, no es recomendable.
 : window.alert("no se aceptan numeros negativos")
*/

/*lo siguiente es lo mismo que un ternario concatenado.*/
if (numero > 0 ){
    suma += numero
} else if (numero == 0 ) {
    window.alert(suma)
} else {
    window.alert("nose aceptan numeros negativos") 
}
}while(numero != 0)