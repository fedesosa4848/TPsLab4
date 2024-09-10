//6. Eliminar Duplicados: Crea una función que elimine los elementos duplicados de un arreglo.

const array = [1,1,2,2,3,3,4,5,6,8,8,9,9];

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
            array.splice(j, 1);
            j--; // Reducir j para compensar la eliminación
        }
    }
}

const array2 = [1, 1, 2, 2, 3, 3, 4, 5, 6, 8, 8, 9, 9];

// Convertir el array en un Set, que automáticamente elimina duplicados
const arrayUnicos = [...new Set(array)];

console.log(arrayUnicos); // Output: [1, 2, 3, 4, 5, 6, 8, 9]

