/* 8. Crea un programa que a partir de un array que contiene las edades de 20 alumnos
(generadas aleatoriamente entre 18 y 35), calcule y nos devuelva la media de edad
de dicha clase.
*/

let array = []
let suma = 0

for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() *(35-18) +18))
    suma += array[i]
}
    console.log(suma/array.lengths)
