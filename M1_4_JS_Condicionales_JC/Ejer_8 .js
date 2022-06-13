/*8. Escribe un programa que pida dos números al usuario. Después muestra un mensaje que dice cómo se 
relacionan entre los dos. Por ejemplo si escribe 5 y 7 , muestra "5 es menor que 7".*/

let = num1 = parseInt(window.prompt("introduce primer numero:")) // pide numero 
let = num2 = parseInt(window.prompt("introduce segundo numero:")) //pide numero

if(num1 < num2){
    console.log(`${num1} es menor que ${num2}`)
}else if(num2 < num1){
    console.log(`${num2} es menor que ${num1}`)
}else {
    console.log(`${num1} y ${num2} son iguales`)
}