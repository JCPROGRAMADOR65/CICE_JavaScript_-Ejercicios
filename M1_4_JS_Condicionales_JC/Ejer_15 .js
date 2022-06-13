/*15. Decir el número de helados que queremos comprar. Cada helado vale 2 euros. Si compramos más de 
10 helados, nos regalan uno. Mostrar en pantalla el número de helados que nos dan y cuánto hemos 
pagado por ellos. (Sólo damos un helado gratuito aunque compren muchos más helados que 10)*/

let helados = parseInt(window-prompt("Escoge el numero de helados que quieres:"))

helados >= 10// operador ternario.
? console.log(`Te llevas ${helados +1} y te cuesta ${helados*2}€`)
: console.log(`Te llevas ${helados} y te cuesta ${helados*2}€`) 
