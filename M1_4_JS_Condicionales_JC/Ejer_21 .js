/*21. Crea un programa para ver si los comerciales reciben un extra. Si venden más de
500 euros, les damos un extra del 5% del total de lo que han vendido. El usuario introduce su 
nombre y el precio de las ventas. Muestra en pantalla su nombre, seguido de las ventas y en el caso 
de que las ventas superen 500 euros el 5% de las ventas como extra.*/

let nombre = window.prompt("Introduce tu nombre")
let ventas = parseInt(window.prompt("Introduce la cantidad de tus ventas:"))

ventas > 500
? window.alert(`${nombre }has superado el objetivo con tus ${ventas}€ de ventas. por tanto te llevas una comision de ${ventas *0.05}€ en total te llevas ${ventas + ventas * 0.05}`)
: window.alert(
    `${nombre} no has superado el objetivo e ventas con tus ${ventas}€. Aprieta para el mes que entra, o vas al paro`
)