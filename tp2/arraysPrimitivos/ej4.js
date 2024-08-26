//4. Buscar Valor: Escribe una función que busque un valor específico en un arreglo y devuelva su índice, si existe.

const arrayNumeros = [40,20,60,15];

const indice = arrayNumeros.findIndex(num => num === 40);

console.log(`El indice del elemento buscado es: ${indice}`);
