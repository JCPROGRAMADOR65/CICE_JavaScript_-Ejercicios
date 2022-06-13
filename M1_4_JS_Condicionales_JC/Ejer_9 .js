/*9.  Un programa que te pregunta la temperatura que hace donde estás y te sugiere qu
hacer dependiendo de ella. Las recomendaciones son:
a.  Si hace más de 40 grados, vete a otro sitio
b.  Entre 30 y 40 grados, enciende el aire acondicionado
c.  Entre 30 y 20 grados, no hagas nada
d.  Entre 10 y 20 grados, enciende la calefacción
e.  Si hace menos de 10 grados, vete a otro sitio
*/

// aqui como trabajamos con rangos, lo ideal es trabajar con rangos.
// podemos usar if, else etc.

let temp =parseInt(window.prompt("Introduce temperatura actual: "))

if(temp >40) {
    console.log("vete a otro sitio")
}else if(temp > 30 && temp <= 40 ){
    console.log("Enciende el Aire acondicionado")
}else if(temp > 20 && temp <= 30 ){
    console.log("No hagas Nada")  
}else if(temp > 10 && temp <= 20 ){
    console.log("Enciende la calefaccion")
}else{
    console.log("Eres Tonto")      
}

