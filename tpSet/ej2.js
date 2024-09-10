// Convertir un Set a un Array:
// o Convierte el Set del ejercicio anterior en un array.


// op1

const numeros = new Set([1, 2, 3, 4, 5]);
const array = [];
numeros.forEach(numero => {
    array.push(numero);
})

console.log(array);

// op2

const numeros2 = new Set([1, 2, 4, 5, 6]);

// Convertir el Set a un Array usando el operador de propagación
const numerosArray = [...numeros];

// Imprimir el Array resultante
console.log(numerosArray);