/*2. Crear un programa que muestre el valor de sumar todos los números desde 1 hasta el
número que introduzca el usuario. Por ejemplo si introduce el 8 debería mostrar 36 (1 +
2+ 3+ 4+ 5+ 6+ 7+ 8).*/

let num = parseInt(window.prompt("introduce el numero"))

let suma = 0

for (let i = 1; i <= num; i++){
    suma+= i // esto e igual suma= suma + i, opera con numeros al mismo tiempo que se guarda sobre si mismo, esto es un operador de asignacion numerica. //
}
console.log(suma)