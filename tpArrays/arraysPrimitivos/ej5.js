/*
5. Filtrar Pares e Impares: Separa un arreglo de números en dos arreglos diferentes, uno con
números pares y otro con números impares.
*/

const arrayNumeros = [10,52,55,30,48,27,9];

const arrayPares = arrayNumeros.filter(num => num % 2 == 0);

const arrayImpares = arrayNumeros.filter(num => num % 2 == 1);

console.log(arrayPares);
console.log(arrayImpares);