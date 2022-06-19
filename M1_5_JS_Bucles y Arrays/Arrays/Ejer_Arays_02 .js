/* 2. Crear un array. Pedir al usuario 3 veces que escriba un string. Guardar cada uno de
esos strings en la posición 0 , 1 y 2. Mostrar en pantalla en el orden: primero
posición 1, después posición 2 y por último posición 0.
*/

let array = []

for (let i = 0; i < 3; i++) {
  array.push(window.prompt("introduce algo:"))
}

console.log(array[1])
console.log(array[2])
console.log(array[0])
 //console.log(array[1], array[2], array[0],)
