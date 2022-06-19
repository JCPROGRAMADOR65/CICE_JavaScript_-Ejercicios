/*5. Escribe un programa que muestre el resultado de sumar todos los números del 1 hasta el
número introducido y que vuelva a pedirle al usuario otro número hasta que el usuario
introduzca un 0.*/

//pedir numero hasta que meta 0//

do {
  let numero = parseInt(window.prompt("introduce un numero:"))
  let suma = 0
  for (let i = 0; i <= num; i++) {
    suma+= i
  }
  console.log(`El resultado de sumar ${numero} y todos los numeros anteriores a el es: ${suma}`)

}while(numero != 0)

console.log("Fin de programa")


