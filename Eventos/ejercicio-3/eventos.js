//Ejercicios Eventos//

/*● 3° - Crear una aplicación que calcule el índice de masa corporal, 
al presionar el botón “calcular” deberá mostrar el resultado en el input correspondiente.*/

const formulario = document.getElementById("formulario-masa-corporal");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const peso = document.getElementById("peso");
    const alturaCM = document.getElementById("altura");
    const alturaEnMetro = alturaCM.value / 100
    resultado.value = peso.value / (alturaEnMetro * alturaEnMetro);
})


