/*10. Realiza un programa que muestre por pantalla los números del 1 al 100 sin mostrar
aquellos números múltiplos de 5.
*/

for (let i = 1; i <= 100; i++) {
   i % 5 == 0 // resto dividido entre 5 es cero //
   ? console.log("") // si es multiplo imprimo espacio vacio//
   : console.log(i)  // si no es multiplo imprimo resultado de i//

}