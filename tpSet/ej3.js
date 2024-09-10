// Eliminar duplicados de un array usando Set:
// o Dado un array [1, 2, 2, 3, 4, 4, 5], elimina los duplicados utilizando un Set.


const array =  [1, 2, 2, 3, 4, 4, 5];

const setNumeros = new Set(array);

const arrayUnicos = [...setNumeros];

console.log(arrayUnicos);
