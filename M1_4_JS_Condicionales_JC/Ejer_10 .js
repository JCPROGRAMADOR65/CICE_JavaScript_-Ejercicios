/*10. Escribe un programa que pida dos valores al usuario y
a.  Si los dos valores son iguales muestre 0
b.  Si los dos valores tienen el mismo resto al dividir entre 6 mostrar el más pequeño
c.  Si no que muestre el más grande de los dos

 hay tres salidas logicas por lo tanto, NO usamos el ternario inicialmente.*/

let = num1 = parseInt(window.prompt("introduce primer numero:")) 
let = num2 = parseInt(window.prompt("introduce segundo numero:"))

if(num1 == num2){
    console.log("0")
}else if(num1%6 == num2%6){ // mismo resto al ser dividido entre 6
    num1 < num2// anidamos un ternario.simplica codigo y es mas legible.
    ?console.log(`${num1} es el menor `)
    :console.log(`${num2} es el menor `)
}else(
    num1 < num2 // caso anterior invertido, para mostrar el mayor.
    ?console.log(`${num2} es el mayor `)
    :console.log(`${num1} es el mayor `)
)



