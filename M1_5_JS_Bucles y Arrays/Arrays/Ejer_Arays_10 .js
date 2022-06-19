/* 10. Crear un array con 11 ceros. Pedir al usuario que introduzca valores entre 0 y 10. Cada vez que 
introduzca un dígito, añadir uno al valor en esa posición del array. Si por ejemplo introduce un 3, 
sumar uno a la posición 3. Mostrar en pantalla los valores. Si introduce un número mayor que 10, 
decir que ese número es incorrecto. Si introduce un número negativo, mostrar en pantalla el número 
de cada posición y el valor que contiene. Por ejemplo, si introduce 7, 7, 7, 5, 6, 5, 9, 9, 10, -1 
mostrar:
*/

let aray = [0,0,0,0,0,0,0,0,0,0,0]
let numero = 0

do {
    numero = parseInt(window.prompt("introduce un indice: "))

    numero > 10 || numero < 0 
    ? console.log("no te enteras")
    : array[numero] = array[numero]+1

}while(numero >= 0)

for (let i = 0; i < array.length; i++) {
    console.log(`${i} -----${array[i]}`)
}