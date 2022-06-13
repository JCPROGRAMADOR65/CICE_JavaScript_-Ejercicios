/*20. Para convertir de grados centígrados a grados fahrenheit multiplicamos por 9, le dividimos 5 y 
a ese resultado le añadimos 32. Para convertir de fahrenheit a centígrados le restamos 32, 
multiplicamos por 5 y dividimos entre 9. Pide un valor y pregunta al usuario si quiere convertirlo 
a centígrados (si escribe C) o si quiere convertirlo a fahrenheit (si escribe F) y muestra el valor 
en pantalla.*/

let temperatura = parsefloat(window.prompt("introduce la temperatura"))
let simbolo = window.prompt(`indica en que quieres convertirlos:"
c = centigrados
F = Fahrenheit`).toUpperCase()

switch(simbolo){
  case "C":
    window.alert(`${temperatura}ºF serian ${(temperatura -32)*5/9}ºC`)
  case "F":
    window.alert(`${temperatura}ºC serian ${(temperatura *9/5)+32}ºF`)
}
