/*19. En una clase tienes tres exámenes, con un valor de 5 puntos máximo en cada uno.
La nota final es la mejor nota de los dos primeros exámenes más la nota del tercer
examen. Crea un programa que con tres notas calcula el resultado de nota final con
los siguientes rangos:
a. 10 es matrícula
b. 9 y hasta 10 es sobresaliente
c. 7 y hasta 9 es notable
d. 6 y hasta 7 es bien
e. 5 y hasta 6 es suficiente
f. 0 hasta 5 es suspenso*/


let = num1 = parseInt(window.prompt("introduce nota1:")) 
let = num2 = parseInt(window.prompt("introduce nota2:"))
let = num3 = parseInt(window.prompt("introduce nota3:"))
let final = (nota > nota2?nota1:nota2 + nota3)

if(final == 10){
  window.alert("matricula!!")
}else if(final >= 9 && final < 10){
  window.alert("sobresaliente") 
}else if(final >= 7 && final < 9){
  window.alert("notable") 
}else if(final >= 6 && final < 7){
  window.alert("bien") 
}else if(final >= 5 && final < 6){
    window.alert("suficiente") 
}else if(final >= 0 && final < 5){
    window.alert("suspenso") 
}
  
  
