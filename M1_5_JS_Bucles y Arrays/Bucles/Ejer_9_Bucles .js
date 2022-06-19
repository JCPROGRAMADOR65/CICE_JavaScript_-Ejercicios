/* 9. Escribe un programa que muestre los números de 1 a 12 en una columna. En la columna
de al lado de los números impares mostrar el cuadrado de ese valor y en la de los pares
mostrar el cubo.*/

for (let i =1; i <= 12; i++) {
  let resultado = 0
  i % 2 == 0 ? (resultado = i ** 3) : (resultado =  i **2)

  console.log(`${i} ---- ${resultado}`)
}