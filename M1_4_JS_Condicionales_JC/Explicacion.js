


let opciones = true

if (opciones){
    console.log("obvio, boqueron")
}

opciones = false

if (opciones) {
    console.log("obvio, boqueron, que tal? ")
}

// operadores relacionales.
3 < 8 // true
8 > 3 // true
3 > 8 // false

2 = 8 // false
3 = 3 // true

let num1 = 4
let num2 = 4

num1 < num2  // flase
num1 <= num2 //true

num1 > num2 //false
num1 >= num2 // true  

num1 =/ num2 //false, diferente.
num1 =/ num1 //false, diferente

// Relacionales estrictos.
let num3 = 4
let num4 = "4"

num3 = num4 // true, JS lo da como true, por que es operador relacional simple, num4 lo convierte en nuemero y dice que es verdad.
num3 == num4 // false, compara el contenido y el TIPO de dato.da false por que no son el mismo tipo.para ser extricto con los TIPOS, se usa relacionales estictos.

num3 == num4 // true, JS lo da como true, por que es operador relacional simple
num3 == num4 // true, JS lo da como true, por que es operador relacional simple


//Estructuras condicionales con expresiones booleanas_ aplicado en ejemplo:
let edad = parseInt(window.prompt("introduce tu edad"))//si

if(edad >= 18){ //si
    console.log("Eres un viejoven!")
}else{ // si no, se ejecuta si la anterior no se cumple
    console.log("Eres un pipiolo!")  
}
// teniendo varios casos, osea si se cumple la condicion o no se cumple la condicion. aqui entra el else= condicional si no, else if= 
if(edad > 18){ //si
    console.log("Eres un viejoven!")
}else if (edad = 18){ // si no si
    console.log("Cuidadito con lo que haces ahora eh !")
}else{ // si no
    console.log("Eres un pipiolo!")
}

// ejemplo con NOTAS. contempla rangos.
let nota = 7
if(nota < 5){ //si
    console.log("has suspendido")
}else if(nota <6){
    console.log("Has sacado un suficiente")
}else if(nota < 8 ){
    console.log("Has sacado un bien")
}else if(nota <10 ){
    console.log("Has sacado un notable")
}else {
    console.log("Has sacado un sobresaliente")
}

// switch = interuptor:
// valora los casos posibles y concretos de la variable.
// se utiliza para valores concretos.
// contempla solo casos concretos.
switch(nota){
    // el switch tiene sentido en variables posibles y concretas,no es el caso del este ejemplo.
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:                       
    console.log("Has suspendido")// se considera UNA MALA PRACTICA. 
  case 6:
  case 7:
    console.log("Has sacado un suficiente")
  case 8:
  case 9:
    console.log("Has sacado un notable")
  default:
    console.log("Has sacado un sobresaliente")
}


// operadores:

// Operador ternario.
nota > 5 // evaluacion logica
? console.log("Has aprobado") // Caso positivo. se cumple has esto
: console.log("Has suspendido") // caso negativo. No se cumple, has esto.

// es muy comodo bajo condiciones de verdadero o falso.
