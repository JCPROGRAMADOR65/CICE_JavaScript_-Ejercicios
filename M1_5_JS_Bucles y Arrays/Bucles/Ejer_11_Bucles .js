/*11. Escribe un programa que muestre el número entero positivo que el usuario introduzca
pero al revés (si introduce 1478 que muestre 8741), hasta que el usuario introduzca 0. Si
introduce 0 la primera vez, debería mostrarlo al revés (es decir, mostrar 0) y acabar el
programa.
*/

/* planteo :
-pedir numero
-se repite mientras NO sea 0.
-imprimir el numero inverso-
*/
do {
    let numero = window.prompt("Introduce un numero:")
   
     for (let i = 0; i < numero.length; i++) {

        numero.substring(numero.length -i, (numero.length -i) +1)
     }
   }while(numero !== "0")