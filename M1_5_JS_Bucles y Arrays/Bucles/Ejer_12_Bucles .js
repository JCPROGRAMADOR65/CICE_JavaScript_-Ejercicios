/* 12. Escribe un programa que pida un número de 3 dígitos y muestre el resultado de sumar
sus dígitos
*/

/* planteo:
-pedir un  numero de tres cifras.
.sumar las cifras entre si.
*/
let cifra = window.prompt("Intoduce un numero de tres cifras")
let suma = 0

console.log(
    parseInt(cifra.substring(0, 1 )) +
    parseInt(cifra.substring(1, 2 )) +
    parseInt(cifra.substring( 2 )) 
)
for (let i = 0; i < cifra.length; i++ ) {
    suma += parseInt(cifra.substring(i, i+1))
    //suma += cifra.charAt(1) // charAt extrae el caracter en la posicion que le digas.
}
console.log(suma)