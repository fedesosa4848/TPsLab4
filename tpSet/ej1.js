// Crear y manipular un Set:
// o Crea un Set con los números 1, 2, 3, 4, y 5.
// o Añade el número 6 y elimina el número 3.

const numeros = new Set([1, 2, 3, 4, 5]);

// Añadir el número 6 al Set
numeros.add(6);

// Eliminar el número 3 del Set
numeros.delete(3);

// Imprimir el Set para verificar los cambios
console.log(numeros);