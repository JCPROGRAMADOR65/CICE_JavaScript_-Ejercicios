/*25. Bob es un adolescente vago, en una conversación sus contestaciones son muy
limitadas:
a.  Bob responde: “¡Claro!” si le haces una pregunta
b.  Bob responde “¡Eh!, tranquilízate.” si le gritas
c.  Bob  responde  “¡Eh,  tranquilízate!  Yo  sé  lo  que  hago.” Si le haces   una pregunta gritándole.
d.  Bob responde “Vale con que esas tenemos...” Si no le dices nada
e.  Bob responde “Sin más.” a cualquier otra cosa

(Consideramos una frase una pregunta si contiene un símbolo de ?, consideramos un grito una frase 
que contenga un !, consideramos una pregunta gritando si tiene tanto el símbolo ? como el !, y 
consideramos no decir nada una cadena de texto vacía)*/

let frase = window.prompt("Dile añgo a Bob:")

if(frase.indexOf("?") !== -1 || frase.substring(frase.length -2) == "!?"){
  window.alert("Eh Tranquilizate. yo se lo que hago.....")
}else if(frase.indexOf("?") !== -1){
  window.alert("¡Claro!")
}else if(frase.indexOf("!") !== -1){
  window.alert("Eh ¡Tranquilizate!")
}else if(frase.length == 0){
  window.alert("Vale con que esas tenemos......")             
}else{
  window.alert("Sin mas...")
}