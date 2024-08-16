//4. Crear una función `saludar` que tome un parámetro `nombre` y retorne un saludo personalizado.

let name = "Juan"

function saludo(name){
    console.log("Hola " + name);
}

//5. Crear una función `esPar` que tome un número como parámetro y retorne `true` si es par, y`false` si es impar.

var numero = 15;

function esPar (numero){
    let rta = false;
    if(numero % 2 == 0){
        rta = true;
    }
    return rta;
}

console.log(esPar(numero));

//6. Crear una función `sumarArray` que tome un array de números como parámetro y retorne la suma de sus elementos.

const miarray = [10,20,30,45,60];

function sumaArray (array){
    let acum = 0
    array.forEach(element => {
        acum += element
    });
    return acum
}

console.log(sumaArray(miarray))