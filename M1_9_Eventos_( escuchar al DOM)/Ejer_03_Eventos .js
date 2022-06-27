/* Supermercado
Vamos  a  hacer  un  e-comerce  sencillo  para  el  supermercado del barrio “Alimentación Alfonso”:
1.  Hacemos una estructura de web clásica: header, main y un footer.
2.  Creamos cuatro divs que tengan un h2 que diga: “manzana”, “carne”, “leche” y “pescado” junto 
con su precio
3.  Le añadimos un botón a cada uno para añadir una unidad a la cesta y otro para restarla.

4. Cuando hagamos click en estos botones, se mostrará en la cesta un texto con la descripción y la 
cantidad ( Manzanas: 2, Leche: 4 ) para los productos de los que tengamos más de 0 en nuestra 
cesta.
5. Además, aparecera el icono correspondiente a cada producto tantas veces como unidades tengamos 
en la cesta.
*/
let manzana = 0
let pescado = 0
let leche = 0
let carne = 0

function modificar(direccion, producto){

  if(producto === 'carne'){
   direccion ==='+' ? carne++ :carne--
  }else if(producto === 'manzana'){
    direccion === '+' ? manzana++ :manzana--
  }else if(producto === 'pescado'){
    direccion === '+' ? pescado ++ :pescado--
  }else {
    direccion === '+' ? leche++ :leche--
  }
 cesta()
}

function cesta(){
  let impresion = ""
  if(manzana >0){
    let manzanaPic = ""
    for (let i = 0; i < manzana; i++) {
      manzanaPic += `<img src="iconos_Supermercado/manzana.png" width="50px"/>`
    }
    impresion += `<h5>Manzana</h5><p>${manzana}${manzanaPic}</p>`
  }
  if (carne >0){
      let carnePic = ""
      for (let i = 0; i < carne; i++) {
        carnePic += `<img src="iconos_Supermercado/carne.png" width="50px"/>`
      }
      impresion += `<h5>carne</h5><p>${carne}${carnePic} </p>`
   }
   if (pescado >0){
      impresion += `<h5>pescado</h5><p>${pescado}</p>`
   }
    if (leche >0){
      impresion += `<h5>leche</h5><p>${leche}</p>`
  }
}
 document.getElementById('cesta').innerHTML = impresion

  
