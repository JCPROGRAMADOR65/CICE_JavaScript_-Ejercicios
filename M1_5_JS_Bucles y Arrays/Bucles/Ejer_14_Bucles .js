/* 14. Pedir al usuario un número. Mostrar en pantalla el dibujo de abajo con tantas líneas
como las que haya introducido:
*/

/* planteo:
-pedir numero.
-imprimir una piramide.
*/

let numero = parseInt(window.prompt("Introduce un numero"))

let impresion = ""

for (let i =1; 1 <= numero; i++){
    console.log(`${impresion+= "*"}`)

}