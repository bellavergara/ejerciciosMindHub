/*● 2° - Crear una aplicación que muestre un cuadrado de color gris. 
Debajo deberá haber un input de texto, al escribir en el input de texto,
los que se esté escribiendo deberá aparecer impreso dentro del cuadrado.
Extras:
● Crea un botón para borrar el contenido del cuadrado.*/

const cuadrado = document.getElementById("cuadrado");  // obtengo la referencia de mi elemento HTML//
const input = document.getElementById("texto-input");
const bottonReset = document.getElementById("boton-reset"); // obtengo la referencia de mi elemento HTML//


input.addEventListener("input", () => {
    cuadrado.innerText = input.value
})
bottonReset.addEventListener("click", () => {
    cuadrado.innerText = ""
    input.value = ""
})