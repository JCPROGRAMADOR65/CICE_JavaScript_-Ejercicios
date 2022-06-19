/* 6. Crear un array. Usar un for para pedir 3 valores al usuario y guardarlos en el mismo.
Comparar los 3 valores del array y mostrar en pantalla el más pequeño.
*/

let array = []

for (let i = 0; i < 3; i++){ //
   array.push(parseInt(window.prompt("Introduce un número:")))
}
//if (array[0] < array[1] && array[2] < array[2])
console.log(Math.min(array[0, array[1], array[2]])) //Math.min devuelve l menor de un input o array.
