/*1.  Escribe un programa que pida dos números y que muestre la suma, la resta, la multiplicación, la 
media, el más grande y el más pequeño.*/

let = num1 = parseInt(window.prompt("introduce un numero:")) // pide numero 1
let = num1 = parseInt(window.prompt("introduce otro numero:")) //pide numero 2

// los operandos que piden:
console.log(num+nu2)
console.log(num-nu2)
console.log(num*nu2)
console.log(num+nu2)/2 // la media de los numeros

// con comparador ternario no podemos, por que son booleanos. verdadera o falso.
if(num1>num2){// si se cumple ejecuta la condicion del codigo.
    console.log(`${num1}es el mayor`) // $(llave dolar), nos permite introducir codigo dentro de un string literal.dentro podemos poner una evaluacion.
}else if(num2>num1){  // si se cumple ejecuta el codigo, si no pasa a siguiente condicion, se usa cuando hay mas condiciones.
    console.log(`${num2}es el mayor`)
}else{ // si no se cumple lo anterior
    console.log(`${num1} y ${num1} son iguales `)
}

