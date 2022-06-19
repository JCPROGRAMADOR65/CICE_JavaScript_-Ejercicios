/* 5.  Poner los nombres de los meses en un array de 12 posiciones. Cuando el usuario
introduce un número del 1 al 12, mostrar el nombre de ese mes en pantalla
*/

let meses =[
"Enero",
"febrero",
"marzo",
"abril",
"mayo",
"junio",
"julio",
"agosto",
"septiembre",
"octubre",
"noviembre",
"diciembre",
]

let peticion = parseInt(window.prompt("Introduce un mes"))
console.log(meses[peticion -1])
