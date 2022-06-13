/*24. Escribe un programa que dice si los dígitos de un número de tres cifras son todos
impares, todos pares o son mezclados. Tu programa debe pedir un número al usuario, y mostrar el 
número, seguido del mensaje "Todas las cifras son pares", "Todas las cifras son impares" o "El 
número tiene cifras pares e impares".*/

let num = window.prompt("introduce un numero de tres cifras:")//pide numero a usuario//

let num1 = parseInt(num.substring(0,1)) // parseint saca un numero, substring saca trozo del sustring//
let num2 = parseInt(num.substring(1,2))
let num3 = parseInt(num.substring(2,3))

// nos piden tres mensajes, opciones.//
// usamos condicional if,

if(num1%2==0 && num2%2==0 && num3%2==0){// o son todos true o no son true, asi sabemos si son pares los tes numeros.
    window.alert("Todas las cifras son pares")
}else if   (num1%2!==0 && num2!==0 && num3%2!==0){// cifras impares.
    window.alert("Todas las cifras son impares.")
}else{   
     window.alert("Tenemos cifras pares e impares mezcladas.")
}