/*5.  Pide al usuario que escriba un día de la semana (lunes, martes…). Mostrar en
pantalla el día que dice que es si es entre lunes y viernes (Por ejemplo "Hoy es lunes") y si es 
fin de semana mostrar "Es fin de semana". Hazlo una vez usando switch y otra con if else.*/


let dia = window.prompt("Introduce el dia de la semana").toLowerCase()
//con toLowerCase nos aseguramos que siempre el dato de usuario queda en minusculas.
 if(dia== "Lunes"||dia == "Martes"||dia == "Martes"||dia == "Miercoles" ||dia == "jueves" || dia == "Viernes"){
    console.log(`Es ${dia}`)
 }else if(dia =="Sabado"||dia == "sabado" ||dia == "Domingo"){
    console.log("es fin de semana")
 }else{
    console.log("eso no es un dia de la semana")
 }





 