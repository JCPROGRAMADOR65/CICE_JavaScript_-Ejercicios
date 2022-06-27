/*Pedir al usuario tres nombres de países de la Unión europea y extraer los datos del objeto 
“paises”. Hay que asegurarse de que existen en el objeto y no son repetidos. Después:
1.  Los 3 paises deberán aparecer en el navegador. Los tres estarán colocados uno junto al otro, 
alineados horizontalmente.
2.  Mostrar una card con los datos correspondientes, Nombre, Población y superficie.
3.  En la imagen de la card, debera aparecer la bandera de cada país.
4.  Añade un botón a cada planeta: al hacer click se cambiará el color de fondo de esa tarjeta por 
el color de ese pais.
*/
paises = [
    {
      pais: "españa",
      poblacion: 47450795,
      color: "red",
      superficie: 505944,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg"
    },
    {
      pais: "francia",
      poblacion: 67407241,
      color: "blue",
      superficie: 675417,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg"
    },
    {
      pais: "alemania",
      poblacion: 83155031,
      color: "yellow",
      superficie: 375375,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
    },
    {
      pais: "italia",
      poblacion: 60257566,
      color: "green",
      superficie: 301340,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
    },
    {
      pais: "portugal",
      poblacion: 10295909,
      color: "DarkGreen",
      superficie: 92090,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
    },
    {
      pais: "irlanda",
      poblacion: 4857000,
      color: "DarkOrange",
      superficie: 70273,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg"
    },
  ]
//se pide a usuario//
let pais1 = window.prompt("Introduce un pais:").toLowerCase()
let pais2 = window.prompt("Introduce otro pais:").toLowerCase()
let pais3 = window.prompt("Introduce un pais mas:").toLowerCase()

/*Array vacio, solo se rellena si las siguientes tres funciones
devuelve algo que seria tres paises*/
let paisesFinal = []

/* llamadas de funcion buscarPaises*/
paisesFinal.push(buscarPaises(pais1, pais2, pais3))
paisesFinal.push(buscarPaises(pais1, pais2, pais3))
paisesFinal.push(buscarPaises(pais1, pais2, pais3))

if (paisesFinal.length == 3){
  let impresion = ""
  for (let paisBueno in paisesFinal) {
   impresion+=
   /*datos de la card, genera botones en el html*/
   `<div class="card">
   <img src="${paisBueno.bandera}" alt="${paisBueno.pais}">
   <h3>${paisBueno.pais}</h3>
   <p>poblacion: ${paisBueno.poblacion}</p>
   <p>Superficie: ${paisBueno.superficie}</p>
   <button id="${paisBueno.pais+"button"}" type="button">ClickMe!</button>
   </div>`
  }
let div = documento.createElement("div")
div.classlist.add("container")
div.innerHTML = impresion
document.body.appendChild(div)

/* ya podemos crear liseners, por que ya existen en el DOM
llegamos aqui solo cuando esten los tres paisesBuenos*/
for (const paisBueno in paisesFinal) {
 document.getElemenByid(paisBueno.pais+"button").addEventListener("click", ()=>document.getElementById(paisBueno.pais).style.backgroundColor)
}

}else{
 let h1 = document.createElement("p")
 h1.innerTex = "Tienes que elegir tres paises unicos de la lista"
 document.body.appendChild(h1)
}

/*comprobar que el objeto existe y no esta repetido*/
function buscarPaises(country1, country2, country3){
    for (let entrada in paises) {
    
      if(entrada.pais == country1 &&
        country1 !== country2 &&
        country2 !== country3 
      ){
        return entrada // devuelve pais entero
      }
    }
    }