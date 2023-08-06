//Ejercicios Bucles//
//1.Realizar un programa que permita el ingreso de un número y muestre su tabla de multiplicar (Los primeros 10 múltiplos).//
let numeroUsuario = Number(prompt("indica un numero, por favor"));
for(let i=1;i<=10; i++){
    resultado = numeroUsuario * i;
    console.log(`${numeroUsuario} x ${i} = ${resultado}`)
}

/*2.Realizar un programa que permita el ingreso de números los cuales se tienen que ir acumulando.
El ingreso de datos terminará cuando el usuario ingrese un valor 0.*/

let numero = Number(prompt("Ingrese números deseados"));
const numerosAcumulados = [];

while(numero !== 0) {
    numerosAcumulados.push(numero);
    numero = Number(prompt("Ingrese números deseados"));
}
console.log(numerosAcumulados);

 /*3.Guarda el número final del ejercicio N°2 en una variable, el mismo deberá estar en un rango entre 1 - 100.
La persona deberá poder ingresar números hasta adivinar el valor guardado en dicha variable. Si el valor ingresado es mayor al número secreto, avisarle al usuario, 
lo mismo si el valor es menor. Así sucesivamente hasta que el usuario adivine el número secreto.
Por último mostrar un mensaje de felicitaciones y decirle en cuantos intentos lo ha realizado.*/

const numeroEjercicio2 = numerosAcumulados.pop();
let numeroIngresado = Number(prompt("ingresa numero  para adivinar el numero secreto"));
let cantidadDeIntentos = 1

while(numeroIngresado != numeroEjercicio2) {
    if (numeroIngresado<numeroEjercicio2){
        console.log("el numero ingresado es menor al  numero secreto")
    }
    else if(numeroIngresado>numeroEjercicio2){
        console.log("el numero que has ingresado es mayor al numero secreto,vuelve a intentarlo");  
    }
    numeroIngresado = Number(prompt("ingresa numero  para adivinar el numero secreto"));
    cantidadDeIntentos ++
}

console.log("felicidades has adivinado el numero secrecto")
console.log(`La cantidad de intentos fue: ${cantidadDeIntentos}`)

// 4.Realizar un programa que reciba un número y muestre de alguna forma todos sus divisores.//

let numeroRecibido = Number(prompt("ingresa un numero, please"));
let arrayDivisores =[];
for (let i = 1; i <=numeroRecibido; i++){
    if(numeroRecibido%i == 0){
        arrayDivisores.push(i)
    }
}
console.log(arrayDivisores);


//5.Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por consola con cada uno de los elementos del array.

let array10Elementos = [2,4,6,8,10,15,18,19,21,30];
for(i=0;i<10;i++){
    console.log(`elemento en la posicion ${i} :${array10Elementos[i]}`);
}

// 6.Dado un array de 10 números, realizar un programa que muestre por consola el doble de cada uno de los elementos.//
let array10elementos = [2,4,6,8,10,15,18,19,21,30];
for(i=0;i<10;i++){
    console.log(`elemento en la posicion ${i} :${array10elementos[i]*2}`);
}

/* 7.Dado un array con al menos 5 objetos comprendidos por un grupo familiar, 
cada objeto representa a 1 persona con al menos 4 propiedades, 
realizar un programa que muestre un mensaje de presentación por cada elemento del array.*/


let miembroFamiliar1 ={
    nombre :"Debora",
    edad : 25,
    relacion: "hermana",
    pasatiempo : "tomar una copa de vino"
};

let miembroFamiliar2 ={
    nombre :"Lucia",
    edad : 27,
    relacion: "hermana",
    pasatiempo :"tomar mates"
};
let miembroFamiliar3 ={
    nombre :"Ernesto",
    edad : 30,
    relacion: "novio",
    pasatiempo :"ver peliculas"
};
let miembroFamiliar4 ={
    nombre :"ciro",
    edad : 10,
    relacion: "sobrino",
    pasatiempo :"serie Flash"
};
let miembroFamiliar5 ={
    nombre :"betty",
    edad : 40,
    relacion: "tia",
    pasatiempo :"hornear budin"
};

let arrayFamiliar =[miembroFamiliar1,miembroFamiliar2,miembroFamiliar3,miembroFamiliar4,miembroFamiliar5];
for (const familiar of arrayFamiliar) {
    console.log(`hola me llamo: ${familiar.nombre} y soy ${familiar.relacion} de Bella`);
}

//8.Dado un array de 10 números, realizar un programa que recorra el array y solo muestre los números impares.//

let arrayNumeros = [2,4,7,9,8];

for(i=0;i<10;i +=2){
    console.log(arrayNumeros[i]);
}


/* 9.Realizar un programa que permita la entrada de números y calcule la suma de los números pares por un lado y los impares por otro, 
el ingreso de dato finaliza cuando el usuario ingresa un 0.*/

let nroUsuario= Number(prompt("ingresa numeros a calcular"));
let sumaPares = 0;
let sumaImpares = 0;

while (nroUsuario !== 0) {
    if(nroUsuario%2 == 0) {
        sumaPares += nroUsuario
    }
    else{
        sumaImpares +=nroUsuario
    }
    nroUsuario=Number(prompt("ingresa numeros a calcular"));
}
console.log(sumaPares);
console.log(sumaImpares);

//10. Dado un array de 10 números, realizar un programa que imprima por pantalla el número más grande.//
let arrayDeNumeros=[20,5,6,0];
let numeroMayor = arrayDeNumeros[0]
for(i=1; i<=arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i]>numeroMayor){
        numeroMayor = arrayDeNumeros[i]
    }
}
console.log(numeroMayor);