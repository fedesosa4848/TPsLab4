//1. Suma de Elementos: Dado un arreglo de números, calcula la suma de todos los elementos.

const arrayNumeros = [1,5,3,7];
let suma = 0;

for(let i = 0; i <= arrayNumeros.length-1; i ++){
    suma += arrayNumeros[i];
}

console.log(suma);

const numeros = [1,2,3,[10,20,30],4];

const copia = [...numeros];

console.log(numeros);
console.log(copia);

const [,,segundo,tercero] = arrayNumeros;

console.log(segundo);