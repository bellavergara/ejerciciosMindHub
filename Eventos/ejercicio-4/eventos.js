/*● 4° - Crear una aplicación de conversión de divisa. 
Deberá tener los valores por defecto, por ejemplo 1 dólar = 500 pesos ( valor de ejemplo ), 
y al hacer algún cambio en alguno de los inputs se deberá ver reflejado su correspondiente valor en la moneda a convertir.*/


const valorDolar = document.getElementById("dolar");
const valorPeso = document.getElementById("peso");

valorDolar.addEventListener("input", () => {
    valorPeso.value = valorDolar.value * 500
})

valorPeso.addEventListener("input", () => {
    valorDolar.value = valorPeso.value / 500
})

