/*4. Escribe un programa que pida al usuario tres números y que diga si la diferencia entre uno de 
ellos es exactamente 20 menos que uno de los otros. Por ejemplo, si el usuario introduce 20, 40 y 
55, el programa dirá que el primer número es 20 menos que el segundo.*/

let = num1 = parseInt(window.prompt("introduce un numero:")) // pide numero 1
let = num2 = parseInt(window.prompt("introduce un numero:")) // pide numero 1
let = num3 = parseInt(window.prompt("introduce un numero:")) // pide numero 1

//if( Math.abs(num1 - num2)== 20){ // Math devuelve valor absoluto de un numero en este ejercicio.
 //   console.log(` ${num1<num2? num1:num2} tiene 20 menos que ${num2}`)
//}

if( Math.abs(num1 - num2)== 20){ // Math devuelve valor absoluto de un numero.
    console.log(`Entre ${num1} y ${num2} hay una diferencia de 20 `)
}else if(Math.abs(num1-num2)==20){
    console.log(`Entre ${num1} y ${num3} hay una diferencia de 20 `)
}else if(Math.abs(num2-num3)==20){
    console.log(`Entre ${num2} y ${num3} hay una diferencia de 20 `)
}else{
    console.log(`No hay ninguna diferencia de 20 entre los tres numeros`)
}