/*16. Con if else if: Mostrar en pantalla un menú con varias opciones. Dependiendo de lo
que el usuario elija, mostrar en pantalla la selección. Hacerlo tanto con if else como
con switch.*/

 /*let opcion = window.prompt("como deseas la carne ? \n A-Cruda \n B-AL Punto \n C-Muy Hecha").toUpperCase() /* \n son saltos de linea, toUpperCase el input de usuario lo convierte en minusculas.*/

 /* mejor que lo anterior con String literal*/
 let opcion = window.prompt(`como deseas la carne ?
 A -Cruda
 B -Al punto
 C -Muy Hecha`).toUpperCase()

 if(opcion == "A"){
    Window.alert("poco echa")
 }else if(opcion == "B"){
    Window.alert("Al punto buena eleccion")
}else if(opcion == "C"){
    Window.alert("muy pasada") 
}else{
    window.alert("Mejor una ensalada entonces?")
}

switch(opcion){
  case "A":
   Window.alert("poco echa")
   break;
  case "B":
   Window.alert("Al punto buena eleccion")
   break;
  case "C":
   Window.alert("muy pasada")
   break;
  default:
   Window.alert("Mejor una ensalada entonces?")
}