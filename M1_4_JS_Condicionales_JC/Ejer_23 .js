/*23. Un año es bisiesto si se puede dividir por 4. Pero un año que se pueda dividir por
100 NO es bisiesto a no ser que se pueda dividir por 400. A partir de un año, mostrar en pantalla 
si es bisiesto o no.*/


let year = parseInt(window.prompt("Introduce el año:"))

//year /4 __ bisiesto && year! / 100 || year/400
//true
if(year %4 == 0 && year%100 !== 0 || year%400 == 0){// divisible entre 4 y asu vez no lo sea entre 100 , hoque lo sea entre 400//
  window.alert(`${year} es un año bisiesto`)
}else{
  window.alert(`${year} no es un año bisiesto`)
}