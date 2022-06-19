/* 15. Escribe un programa el cual analizará si la contraseña introducida es correcta o no. Para
que la contraseña sea correcta deberá cumplir estas directivas:
● Debe tener 8 caracteres como mínimo.
● La contraseña deberá contener números. (buscar una función)
● La primera letra tiene que ser en mayúsculas.(buscar una función)
*/

/* Planteo:
- +8
-numero
-mayuscula inicial
*/

let contrasena = window.prompt("Introduce tu contraseña:")
let numero = false

if(contrasena.length >= 8) {
    for (let i = 0; i < 10; i++){
      if(contrasena.includes(i.toString())){
        numero = true
      }
    }
} else{
    console.log("La contraseña no cumple los requisitos")
}