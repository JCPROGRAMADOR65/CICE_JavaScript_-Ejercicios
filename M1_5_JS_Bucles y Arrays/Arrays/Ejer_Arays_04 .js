/* 4. Crea un array vacío. Despues pidele al usuario que introduzca 10 valores a ese
array Usar un for para mostrarlos en pantalla
*/

let array = []

for (let i = 0; i < array.length; i++) {
  array[i] = parseInt(window.prompt("introduce un numero"))
}
for (let i = 0; i < array.length; i ++){
  console.log(array[i])
}