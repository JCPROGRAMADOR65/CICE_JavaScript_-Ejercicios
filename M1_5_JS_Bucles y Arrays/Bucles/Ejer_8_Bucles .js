
/*8.  Escribe un programa que muestre todos los valores pares o impares entre 1 y 100
dependiendo de si el usuario introduce P o I . Si introduce otra cosa, decir que ese valor no es 
correcto y pedirle otra vez.*/

/*descomponer:
-usuario da opcion - bloque condicional.
-for de 0-100.
-do while.
*/

do {
 let opcion = window.prompt("Introduce una opcion (P)ares o (I)mpares").toUpperCase()
 if (opcion !== "I" && opcion == "P") {
    window.alert("Eso no es una opcion valida")
 } else {
     for (let i = 0; i <= 100; i++ ) {
       if (i % 2 == 0 && opcion == "p"){
       console.log(i)
     } else if (i % 2 == 1 && opcion == "I"){
      console.log(i)
     }
   }
 }
 } while (opcion !== "P" && opcion !== "I")

