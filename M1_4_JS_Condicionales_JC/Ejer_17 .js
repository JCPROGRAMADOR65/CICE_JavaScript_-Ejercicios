/*17. Mostrar el mayor de tres valores*/

let = num1 = parseInt(window.prompt("introduce un numero:")) // pide numero 1
let = num2 = parseInt(window.prompt("introduce segundo:")) // pide numero 2
let = num3 = parseInt(window.prompt("introduce tercer numero:")) // pide numero 

if(num1>num2 && num1>num3){
  mayor = num1
}else if(num2>num1 && num2>num3){
  mayor = num2  
}else if(num3>num1 && num3>num2){
  mayor = num3 
}else {
    console.log("no hay ninguno mayor que los demas")
}
console.log(`El mayor es ${mayor}`)

