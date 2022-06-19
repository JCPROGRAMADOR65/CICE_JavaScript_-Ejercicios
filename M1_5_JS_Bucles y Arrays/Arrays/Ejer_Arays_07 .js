/* Haz un programa que realice la media de los valores que contiene un array de 10
números y lo muestre por consola. No es necesario pedir los números al usuario.
*/

let array =[]
let suma = 0

for (let i = 0; i < 10; i++) {
    array.push(Math.random()*100) // Math.random  solo devuelve numeros decimales 
    suma += array[i]
}
/*for (let i = 0; i < array.length; i++) {
    suma +=array[i]
} */ 
console.log(suma/array.length)          
