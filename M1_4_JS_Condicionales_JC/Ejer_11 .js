/*11. Escribe un programa que pida dos números enteros entre 25 y 75 y que diga si hay un dígito en 
común entre los dos números.*/

let num1 = window.prompt(
    "Introduce un numero entero mayor de 25 y menor de 75:")
let num2 = window.prompt(
     "Introduce un numero entero mayor de 25 y menor de 75:")
  
     let digi11 = num1.substring(0,1)
     let digi12 = num1.substring(1)
     let digi21 = num2.substring(0,1)
     let digi22 = num2.substring(1)

if( digi11 == digi21||digi11 == digi22||digi12 == digi21||digi12 == digi22){
    console.log("hay dos digitos en comun")
}