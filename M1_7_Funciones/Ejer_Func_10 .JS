/* 10. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo. Pediremos de 
qué figura queremos calcular su área y según lo introducido pedirá los valores necesarios para 
calcular el área. Crea un método por cada figura para
*/
//Opciones deusuario //
let opcion = window.prompt(`De que figura quierers calcular el àrea ?:
1- Cieculo
2- Cuadrado
3- Triangulo`)

if(opcion == "1"){
   let radio = parseInt(window.prompt("Introduce el radio de tu circulo:"))
   window.alert(areaCirculo(radio))
   
}else if(opcion == "2"){
  let lado = parseInt(window.prompt("Introduce el lado de tu cuadrado:"))
  window.alert(areaCirculo(lado))

}else if(opcion == "3"){
  let base = parseInt(window.prompt("Introduce la base de tu triangulo:"))
  let altura = parseInt(window.prompt("Introduce la altura de tu triangulo:"))
  
  window.alert(areaTriangulo(base, altura))
}
//zona de las funciones, que al llamarlas y darles datos correctos, nos devuelve el Area.
function areaCirculo(radio) {
  return parseInt((radio**2)*3.1592)
}

function areaCuadrado(lado) {
  return parseInt(lado**2)

}function areaCirculo(base, altura) {
  return parseInt((base*altura)/2)
}