//Ejercicios FUNCIONES PRIMERA ORDEN//

//1.Generar una función que reciba como parámetro un array de cervezas 
//y devuelva un nuevo array con las 10 cervezas más alcohólicas//

function top10CervezasFuertes(arrayDeCervezas) {
    // primero: hacemos una copia de arrayDeCervezas con map()
    const copiaDeArray = arrayDeCervezas.map(objetoCerveza => objetoCerveza);

    // segundo: ordenamos la copia del arrayDeCervezas con sort() de forma descendente, en base al atributo 'abv'
    copiaDeArray.sort((a, b) => b.abv - a.abv);

    // tercero: tomamos los primeros 10 elementos de la copia del arrayDeCervezas con slice()
    // finalmente devolvemos los primeros 10 elementos de la copia del arrayDeCervezas
    return copiaDeArray.slice(0, 10);
}

//2.Generar una función que reciba como parámetro un array de cervezas y 
//devuelva un nuevo array con las 10 cervezas menos amargas.//
function top10CervezasSuaves(arrayDeCervezas) {
    return arrayDeCervezas
        .map(objetoCerveza => objetoCerveza)        // realizo copia del array original con .map
        .sort((a, b) => a.ibu - b.ibu)              // ordeno el array con .sort
        .slice(0, 10)                               // obtengo los primeros 10 elementos del array
}


/*3.Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. 
La función debe devolver un nuevo array con las cervezas que no excedan el nivel etílico. 
Cada elemento del nuevo array debe ser un objeto que tenga la propiedades nombre, alcohol (abv) y "amargor" (ibu)*/

function obtenerCervezasQueNoExceden(arrayDeCervezas, nivelAlcohol) {

    return arrayDeCervezas
        .map(objetoCerveza => {
            return {
                nombre: objetoCerveza.name,
                alcohol: objetoCerveza.abv,
                amargor: objetoCerveza.ibu,
            }
        }) // copia de array original//
        .filter(objeto => objeto.alcohol < nivelAlcohol); // filtrando por la condicion //
}

/*4.Generar una función que reciba como parámetro un array de cervezas, un nombre de propiedad y un valor booleano. 
Debe devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento, de manera ascendente si el tercero es true o descendente si es false.*/

function obtenerTop10CervezasOrdenadasPorPropiedad(arrayDeCervezas, nombreDePropiedad, orden) {

    if (orden) {
        return arrayDeCervezas
            .map(objetoCerveza => objetoCerveza)                        //copia array original//
            .sort((a, b) => a[nombreDePropiedad] - b[nombreDePropiedad]) // sort ordena  el array por la propiedad ingresada.//

    }
    else {
        return arrayDeCervezas
            .map(objetoCerveza => objetoCerveza)                        //copia array original//
            .sort((a, b) => b[nombreDePropiedad] - a[nombreDePropiedad]) // sort ordena  el array por la propiedad ingresada.//

    }
}
/*5.Generar una función que reciba como parámetro un array de cervezas y un id.
La función debe renderizar (renderizar, dibujar, pintar, llenar, etc)
en un archivo html una tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del array. 
Cada fila debe tener los datos que se piden de cada una de las cervezas.*/

function renderizar(arrayDeCervezas, id) {
    const contenedor = document.getElementById(id);
    let contenido = arrayDeCervezas.map(objetoCerveza => {
        return `<tr>
            <td>${objetoCerveza.name}</td>
            <td>${objetoCerveza.abv}</td>
            <td>${objetoCerveza.ibu}</td>
          </tr>`
    }).join('')
    contenedor.innerHTML = contenido
}

//renderizar(beers, "contenedor")