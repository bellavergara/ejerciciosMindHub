//Ejercicios Eventos//

/*● 1° - Crear una aplicación que muestre un cuadrado de color gris. 
Debajo deberá haber un botón que diga “Cambiar”, al hacer click sobre el botón, el color de relleno del cuadrado deberá cambiar a celeste.//

Extras:
● Al hacer nuevamente click el color del cuadrado deberá cambiar a rojo.
● Lograr que cada vez que haya un cambio de color aparezca el nombre del color
dentro del cuadrado.*/

const cuadrado = document.getElementById("cuadrado");  // obtengo la referencia de mi elemento HTML//
const botton = document.getElementById("boton-cambiar"); // obtengo la referencia de mi elemento HTML//
let cantidadDeClicks = 0


botton.addEventListener("click", () => {             // parametro 1: evento (click ) / parametro 2 : funcion flecha  cuadrado cambia color.//
    cantidadDeClicks++
    if (cantidadDeClicks === 1) {
        cuadrado.style.backgroundColor = "lightblue"
        cuadrado.innerText = "Celeste"
    }
    else {
        cuadrado.style.backgroundColor = "red"
        cuadrado.innerText = "Rojo"
    }
})


