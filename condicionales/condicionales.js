//ejercicios condicionales//
//1Realizar un programa que reciba 2 números y que imprima por consola si el primer número es mayor que el segundo.//

let primerNumero = Number(prompt("ingresa el primer numero"));
let segundoNumero = Number(prompt("ingresa el segundo numero"));
if(primerNumero>segundoNumero) {
    console.log("el primer número es mayor que el segundo");
}else{
    console.log("el primer numero no es mayor que el segundo");
}
//2 Realizar un programa que reciba 2 números y que imprima por consola si los números son iguales o si son diferentes.//

let numerouno = Number(prompt("coloca el primer numero"));
let numeroDos = Number(prompt("coloca el segundo numero"));

if(numerouno == numeroDos){
    console.log("los numeros son  de igual valor");
}else{
    console.log("no coinciden los valores");
}

//3 Realizar un programa que reciba 2 números y que imprima por consola cuál de los 2 números es el más grande o si son iguales.//

let num1 = Number(prompt("ingresa el primer dato"));
let num2 = Number(prompt("ingresa el segundo dato"));

numerosAcomparar = num1== num2;
if(num1>num2) {
    console.log(`el numero${num1} es mayor que ${num2}`);
} else if (num2>num1) { 
    console.log(`el numero ${num2} es mayor que ${num1}`);
}else{
    console.log(numerosAcomparar);
}

//4 Realizar un programa que reciba 3 números y que imprima por pantalla cual de los 3 es el más chico.



function encontrarMenor(){
let numeroprimero = Number(prompt("coloca el primer numero"));
let numeroSegundo =Number(prompt("coloca el segundo numero"));
let numeroTercero =Number(prompt("coloca el tercer numero"));

let numeroChico = Math.min(numeroprimero,numeroSegundo,numeroTercero);
console.log(`el numero mas chico es : ${numeroChico}`)
}
encontrarMenor();

/*5Realizar un programa que reciba 2 objetos representando personas con las propiedades:
● nombre
● edad
● altura
y que imprima por pantalla:
1. cual de las dos personas es la más alta
2. cual es la de mayor edad.*/


let persona1 = {

    nombre: "Debora",
    edad:25,
    altura: 159,
}

let persona2 = {

    nombre: "Lucia",
    edad:27,
    altura: 155,
}

function compararPersonas(persona1, persona2){
    if(persona1.altura>persona2.altura){
        console.log(persona1.nombre +" es la mas alta");
    }else if (persona2.altura>persona1.altura){
        console.log(persona2.nombre +" es la mas alta");
    }else{
        console.log("ambas personas tienen la misma altura");
    }
}compararPersonas(persona1, persona2);

if(persona1.edad>persona2.edad){
    console.log(persona1.edad + " es la de mayor edad."); 
}else if (persona2.edad>persona1.edad){
    console.log(persona2.edad + " es la de mayor edad.");
}else{
    console.log("ambos tienen la misma edad");
}

 /* 6. Realizar un programa que permita ingresar por pantalla:
● tu nombre
● tu edad
● tu altura
● tu visión
y determine si estás capacitado para conducir, para saber esto la persona deberá
● Tener edad mínima de 18 años.
● Medir más de 150 cm.
● Tener una visión como mínimo de 8 de 10.*/


let nombrePersona = prompt("indica tu nombre aqui");
let edadpersonas = Number(prompt("ingresa tu edad aqui"))
let alturaPersona = Number(prompt("indica tu altura aqui"));
let visionPersona = Number(prompt("indica  tu visio aqui"));

if(edadpersonas>= 18){
    console.log("estas capacitad@ para conducir");
}else if (alturaPersona> 150 && alturaPersona>8){
    console.log(" tienes la altura suficiente para conducir");
}else{
    console.log("no tienes los requisitos necesarios para conducir");
}
