//Ejercicos Funciones//
/*1.
Crea una función llamada "saludar" que tome un parámetro de tipo cadena/string que represente un nombre, 
y muestre en la consola un saludo personalizado utilizando el nombre proporcionado. 
Llama a la función con tu propio nombre para verificar que funcione correctamente.*/

function saludar(nombre) {
  console.log(`Hola ` + nombre + ` tu puedes con todo`);
}
saludar("Bella");

/*2 Crea una función llamada "multiplicar" que reciba dos parámetros numéricos y devuelva el resultado de la multiplicación de ambos.
Llama a la función con dos valores diferentes y muestra el resultado en la consola. */

function multiplicación(numero1, numer2) {
  let multiplicar = numero1 * numer2;
  console.log(multiplicar);
}
multiplicación(10, 20);

/* 3. Crea una función llamada "areaTriangulo" que reciba dos parámetros numéricos que representen la base y la altura de un triángulo,
    y devuelva el área del mismo. Luego, crea otra función llamada "perimetroTriangulo" que reciba tres parámetros numéricos que representen los lados de un triángulo, y devuelva el perímetro del mismo. 
    Utiliza estas funciones para calcular el área y el perímetro de un triángulo con base 5 y altura 3 y lados de 4, 5 y 6 respectivamente.*/

function areaTriangulo(base, altura) {
  let baseyAltura = (base * altura) / 2;
  console.log(baseyAltura);
}
areaTriangulo(5, 3);

function perimetroTriangulo(ladoA, ladoB, ladoC) {
  let sumarperimetros = ladoA + ladoB + ladoC;
  console.log(sumarperimetros);
}
perimetroTriangulo(4, 5, 6);

/* 4 Crea una función llamada "calcularPrecio" que reciba dos parámetros numéricos que representen el precio y la cantidad de un producto, y devuelva el precio total de la compra.
Si la cantidad de productos es mayor o igual a 10, aplica un descuento del 10% al precio total. 
 Si la cantidad de productos es mayor o igual a 20, aplica un descuento del 20% al precio total. Llama a la función con diferentes valores de precio y cantidad para verificar que funcione correctamente */

function calcularPrecio(precio, cantidad) {
  let preciototal = precio * cantidad

  if (cantidad >=10 && cantidad <20) {
    preciototal  * 0.9

  } else if (cantidad >= 20) {
    preciototal = preciototal * 0.8
  }
  console.log(preciototal);
}
calcularPrecio(100, 20);

/* 5 Crea una función llamada "esMayorDeEdad" que reciba un parámetro numérico que represente la edad de una persona, 
y devuelva un mensaje que indique si la persona es mayor de edad o no. Si la edad es mayor o igual a 18, el mensaje debe decir "Eres mayor de edad". Si la edad es menor a 18, el mensaje debe decir "Eres menor de edad".
Utiliza el operador ternario para implementar esta función. Llama a la función con diferentes valores de edad para verificar que funcione correctamente.*/

function esMayorDeEdad(edad){
  if( edad>=18){ 
    console.log("eres mayorcito de edad");
  }
  else{
    console.log("eres menor de edad");
  }

  }
  esMayorDeEdad(16);


/*6Crea una función llamada "calcularImpuesto" que tome un parámetro numérico que represente el ingreso anual de una persona, y devuelva el impuesto que debe pagar. 
  Si el ingreso es menor o igual a $10,000, el impuesto es del 10% del ingreso. Si el ingreso es mayor a $10,000 pero menor o igual a $20,000, el impuesto es del 15% del ingreso.
  Si el ingreso es mayor a $20,000, el impuesto es del 20% del ingreso. Utiliza condicionales anidados para implementar esta función. Llama a la función con diferentes valores de ingreso para verificar que funcione correctamente.*/

  function calcularInpuesto(ingresoAnual){
    let inpuesto = 0;
    if(ingresoAnual<=10000){
        inpuesto = ingresoAnual  *0.1;
    }
    else if (ingresoAnual <=20000){
          inpuesto = ingresoAnual * 0.15;
    }
    else {
      inpuesto = ingresoAnual * 0.2;
    }
    return inpuesto
  }

  
console.log(`el inpuesto es: $${calcularInpuesto(10000)}`);
console.log(`el inpuesto es: $${calcularInpuesto(20000)}`);
console.log(`el inpuesto es: $${calcularInpuesto(30000)}`);


/* 7 Crea una función llamada "verificarDia" que reciba un parámetro numérico que represente el número del día de la semana, 
y devuelva un mensaje que indique si es un día laboral o no. Si el número es 1, 2, 3, 4, 5, 
el mensaje debe decir "Es un día laboral". Si el número es 6 o 7, el mensaje debe decir "Es fin de semana".
Utiliza la estructura de control switch anidada para implementar esta función. Llama a la función con diferentes valores de día para verificar que funcione correctamente.*/

function verificarDia(dia){
  switch(dia){
    case 1:
      return "Es un dia laboral";
    case 2:
      return "Es un dia laboral";
    case 3:
      return "Es un dia laboral";
    case 4:
      return "Es un dia laboral";
    case 5:
      return "Es un dia laboral";
    case 6:
      return "Es fin de semana";
    case 7:
      return "Es fin de semana";
    default:
      return "No es un dia de la semana";

  }
} 
console.log(verificarDia(1));
console.log(verificarDia(2));
console.log(verificarDia(3));
console.log(verificarDia(4));
console.log(verificarDia(5));
console.log(verificarDia(6));
console.log(verificarDia(7));
console.log(verificarDia(8));
console.log(verificarDia("pepe"));



//otra forma de realizar el ejercicio//

function verificarDiaLaboral(dia) {
  if (dia >=1 && dia <=5) {
    return "Es un dia laboral"
  }
  else if(dia==6 || dia==7) {
    return "Es fin de semana"
  }
  else {
    return "No es un dia de la semana"
  }
}