//13. Crear una función `crearPersona` que tome parámetros `nombre` y `edad`, y retorne un objeto persona con esas propiedades.

/*
Opcion 1

function crearPersona (nombre,edad){
    const Persona = {
        nombre : nombre,
        edad : edad
    }

    return Persona;
}

console.log(crearPersona("Pedro",25));
*/

//Opcion 2 . sintaxis de ES6   

function crearPersona(nombre, edad) {
    const Persona = { nombre, edad };
    return Persona;
}

console.log(crearPersona("Pedro", 25)); 

//14. Crear una función `obtenerInfo` que tome un objeto persona como parámetro y retorne una cadena con su información.
const pers1 = crearPersona("Ana",29);

function obtenerInfo (Persona){
    console.log(Persona)
}

obtenerInfo(pers1)

//15. Crear una función `duplicarArray` que tome un array de números como parámetro y retorne un nuevo array con cada elemento duplicado.

const arrayNumeros = [1, 2, 3, 4];

function duplicarArray(array) {
    const arrayDuplicado = [];
    for (let index = 0; index < array.length; index++) { // Cambié `<=` a `<`
        arrayDuplicado.push(array[index]); // Agregar el elemento original
        arrayDuplicado.push(array[index]); // Agregar el elemento duplicado
    }
    return arrayDuplicado;
}

console.log(duplicarArray(arrayNumeros));

//Opcion 2

//Usar flatMap

function duplicarArray2(array) {
    return array.flatMap(element => [element, element]); // Duplicar cada elemento
}

console.log(duplicarArray(arrayNumeros));

//16. Crear una función `invertirCadena` que tome una cadena como parámetro y retorne la cadena invertida.

function invertirCadena(cadena) {
    return cadena.split('').reverse().join(''); //Spliteo la cadena en un array, invierto el array con reverse, y lo vuelvo a unir con join
}


const cadenaOriginal = "hola";
const cadenaInvertida = invertirCadena(cadenaOriginal);
console.log(cadenaInvertida); 



function invertirCadena2(cadena) {
    let cadenaInvertida = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}

// Ejemplo de uso
const cadenaOriginal2 = "hola";
const cadenaInvertida2 = invertirCadena(cadenaOriginal);
console.log(`Cadena invertida con bucle ${cadenaInvertida}`); 

//17. Crear una función `filtrarPorLongitud` que tome un array de palabras y un número como 
//parámetro, y retorne un nuevo array con las palabras que tienen una longitud mayor al número.

const arrayPalabras = ["Estoy", "aprendiendo", "JavaScript"];
let longitud = 6;

function filtrarPorLongitud(arrayPalabras, longitud) {
    const arrayFiltrado = arrayPalabras.filter(element => element.length > longitud);
    return arrayFiltrado; // Retornar el array filtrado en lugar de console.log
}

console.log(filtrarPorLongitud(arrayPalabras, longitud)); // Output: ["aprendiendo", "JavaScript"]