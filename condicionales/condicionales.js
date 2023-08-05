
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

let numeroo1 = Number(prompt("ingresa el primer dato"));
let numeroo2 = Number(prompt("ingresa el segundo dato"));

numerosAcomparar = numeroo1== numeroo2;
if(numeroo1>numeroo2) {
    console.log(`el numero${numeroo1} es mayor que ${numeroo2}`);
} else if (numeroo1>numeroDos) { 
    console.log(`el numero ${numeroo1} es mayor que ${numeroDos}`);
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
let visionPersona = Number(prompt("indica tu vision aqui"));

if(edadpersonas>= 18 && alturaPersona>150 && visionPersona>8) {
    console.log("estas capacitad@ para conducir");

}else{
    console.log("no tienes los requisitos necesarios para conducir");
}


/* 7.Realizar un programa que permita el ingreso por pantalla de los siguientes datos:
● Nombre del cliente.
● Pase ( vip o normal )
● Si posee entrada ( si o no ).
Las personas que posean:
Tú mismo nombre tienen ingreso libre ( mostrar un mensaje de bienvenida ) ó Pase vip tienen ingreso libre ( mostrar un mensaje de bienvenida )
Si posee entrada preguntar ¿desea utilizarla?, en caso: afirmativo ( mostrar un mensaje de bienvenida )
Y por último en caso de:
No tener el mismo nombre y no tener un pase vip y no tener entrada, preguntar ¿desea comprar? en caso:
negativo ( mostrar mensaje de despedida )
afirmativo preguntar dinero disponible, si posee:
$1000 o mas, ( mostrar un mensaje venta exitosa y de bienvenida ) Menos de $1000 ( mostrar un mensaje de rechazo de venta )*/

let nombreCliente = prompt("ingrese su nombre, por favor");
let pase = prompt("indica tu pase : VIP o NORMAL");
let entrada = prompt("posee entrada? : SI |NO");

if(nombreCliente.toLowerCase()=="bella" || pase.toLowerCase()=="vip" ){
    console.log("Bienvenid@ al lugar");
} 
else if(entrada.toLowerCase() == "si"){
    let respuesta = prompt("desea utilizar la entrada? SI|NO");
    if(respuesta.toLowerCase() == "si"){
        console.log("bienvenid@ puedes pasar")
    }
    else{
        console.log("no puedes ingresar sin tu entrada");
    }
}
else{
    let respuesta = prompt("desea comprar una entrada? SI|NO ");
    if (respuesta.toLowerCase() == "si"){
        let  dineroUsuario = Number(prompt("cuanto dinero dispone?"));
        if(dineroUsuario >= 1000){
            console.log("la venta ha sido exitosa, bienvenid@");
        }
        else{
            console.log("no se pudo concretar la venta, vuelva a intentarlo otro dia");
        }
    }
    else{
        console.log("hasta luego");
    }
}

/* 8  
Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el número.
El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado,
y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, has adivinado el número.”
No te preocupes si usas mucho código repetido, más adelante verás cómo realizar este juego de manera más eficiente.*/

const numeroIncognita = 10;
// primer intento
let numeroIngresado = Number(prompt("ingresa un numero del 1 al 10, para adivinar"));
if(numeroIngresado == numeroIncognita){
    console.log(" Ganaste, has adivinado el número.");
}
else if (numeroIngresado < numeroIncognita){
    console.log("el numero ingresado es menor, vuelve a intentarlo");
    
    // segundo intento
    numeroIngresado = Number(prompt("ingresa un numero del 1 al 10, para adivinar"));
    if(numeroIngresado == numeroIncognita){
        console.log(" Ganaste, has adivinado el número.");
    }
    else if(numeroIngresado<numeroIncognita){
        console.log("el numero ingresado es menor, vuelve a intentarlo");
        
        // tercer intento
        numeroIngresado = Number(prompt("ingresa un numero del 1 al 10, para adivinar"));
        if(numeroIngresado == numeroIncognita){
            console.log(" Ganaste, has adivinado el número.");
        }
        else{
            console.log("has utulizado tus 3 intentos, fin del juego");
        }
    }
    else{
        console.log("el numero ingresado es mayor, vuelve a intentarlo");

        // tercer intento
        numeroIngresado = Number(prompt("ingresa un numero del 1 al 10, para adivinar"));
        if(numeroIngresado == numeroIncognita){
            console.log(" Ganaste, has adivinado el número.");
        }
        else{
            console.log("has utulizado tus 3 intentos, fin del juego");
        }
    }
}
else{
    console.log("el numero ingresado es mayor, vuelve a intentarlo");
    // segundo intento
    numeroIngresado = Number(prompt("ingresa un numero del 1 al 10, para adivinar"));
    if(numeroIngresado == numeroIncognita){
        console.log(" Ganaste, has adivinado el número.");
    }
    else if(numeroIngresado<numeroIncognita){
        console.log("el numero ingresado es menor, vuelve a intentarlo");
        
        // tercer intento
        numeroIngresado = Number(prompt("ingresa un numero del 1 al 10, para adivinar"));
        if(numeroIngresado == numeroIncognita){
            console.log(" Ganaste, has adivinado el número.");
        }
        else{
            console.log("has utulizado tus 3 intentos, fin del juego");
        }
    }
    else{
        console.log("el numero ingresado es mayor, vuelve a intentarlo");

        // tercer intento
        numeroIngresado = Number(prompt("ingresa un numero del 1 al 10, para adivinar"));
        if(numeroIngresado == numeroIncognita){
            console.log(" Ganaste, has adivinado el número.");
        }
        else{
            console.log("has utulizado tus 3 intentos, fin del juego");
        }
    }
}



/*9
Crear un programa que permita ingresar tu edad y
decir si eres un infante (0 a 12 años),
adolescente(13 a 18 años),
un mayor joven (19 a 45 años) o un anciano (más de 45 años),
y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.
*/

const  edadUsuario = Number(prompt("ingresa tu edad"));
    if(edadUsuario<=12){
        console.log("eres infante");
    }
    else if(edadUsuario>=100){
        console.log(prompt("enrealidad tienes esa edad?"));
    }
    else if(edadUsuario<=18){
        console.log("eres un adolescente");
    }
    else if(edadUsuario<=45){
        console.log( "eres un joven mayor");
    }
    else if (edadUsuario>45){
        console.log("eres un anciano");
    }
    
    
    /*10Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cuál de los 2 ha ganado o si han empatado. 
    En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.*/

    // ingreso de "PIEDRA", "PAPEL",o "TIJERA" a dos usuarios//
    //mostrar en pantalla el ganador del juego // O // si enpataron
    //en caso de ingreso incorrecto, mostrar por pantalla que uno de los jugadores hace trampa.//
    
    
 let jugador1 = prompt("ingresa: PIEDRA, PAPEL, o TIJERA ");
let jugador2 = prompt("ingresa: PIEDRA, PAPEL, o TIJERA ");

if(jugador1.toLowerCase() ==jugador2.toLowerCase()){
    console.log(" jugadores empatados");
}
else if (
    (jugador1.toLowerCase() == "piedra" && jugador2.toLowerCase() == "tijera") ||
    (jugador1.toLowerCase() == "tijera" && jugador2.toLowerCase() == "papel") ||
    (jugador1.toLowerCase() == "papel" && jugador2.toLowerCase() == "piedra")
    ) {
    console.log(`Gana jugador 1: ${jugador1} le gana a ${jugador2}`);
}
else if(
    (jugador2.toLowerCase()== "piedra" && jugador1.toLowerCase() =="tijera") ||
    (jugador2.toLowerCase() == "papel" && jugador1.toLowerCase() == "piedra") ||
    (jugador2.toLowerCase() == "tijera" && jugador1.toLowerCase() == "papel")
    ){
        console.log(`gana jugador 2: ${jugador2} le gana a ${jugador1}`);
    }

    /*11Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones:
    ● Blanco o Negro: Falta de color.
    ● Verde: El color de la naturaleza.
    ● Azul: El color del agua.
    ● Amarillo: El color del sol.
    ● Rojo: El color del fuego.
    ● Marrón: el color de la tierra.
    ● y para cualquier otro valor: Excelente elección, no lo teníamos pensado.*/


     let colorUsuario = prompt("ingresa un color");
    switch
     (colorUsuario.toLowerCase()) {
        case "blanco" :  "negro"
            console.log("Falta de color.")
            break;

        case "negro":
            console.log("falta de color")
        break;

        case "verde":
            console.log("el color de la naturaleza")
            break;

        case "azul":
            console.log("el color del agua")
        break;

        case "amarillo":
            console.log("el color del sol")
        break;

        case "rojo":
            console.log("el color del juego")
            break;
        
        case " marorn":
            console.log("el color de la naturaleza")
        
        break;

        default:
                console.log(" Excelente elección, no lo teníamos pensado.")
            break;
    }

    /*12.Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. 
    Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado.
     En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.*/

    let num1 =Number(prompt("ingresa el primer  valor  numerico"));
     let num2 =Number(prompt("ingresa el segundo valor numerico"));
     let operacion = prompt("coloca tu operacion de preferencia : +,-,* ,%");

     if(operacion == "+"){
        let suma = num1 + num2
        console.log(suma)
     }
     else if(operacion == "-" ){
        let resta = num1 - num2
        console.log(resta)
     }
     else if(operacion == "*"){
        let multiplicación = num1 * num2
        console.log(multiplicación)
     }
     else if (operacion=="%" && num2 != 0){
        let division = num1 /num2
        console.log(division)
     }
     else{
        console.log("ERROR");
     }

    /* 13 Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad,
    mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. 
    En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() más un mensaje de registro exitoso,
    en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.*/

let documentoUsuario = Number(prompt("indica tu DNI abajo, por favor"));
     console.log(documentoUsuario)
     let preguntaUusario= prompt("los datos ingresados son correctos? SI|| NO")
     if(preguntaUusario.toLowerCase() == "si"){
        let dni ={
            documentoUsuario 
        };
        console.table(dni.documentoUsuario + "registro exitoso");
     }
     else{
        console.log("vuelva a intentarlo en 1 mes");
     }




    
