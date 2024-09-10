//7. Ordenar Arreglo: Ordena un arreglo de números de forma ascendente.

const array = [10, 8, 3, 1, 9, 22];

array.sort((a, b) => a - b);

/*
(a, b) => a - b: Esta función de comparación toma dos elementos a y b del array y los resta. 
Si el resultado es negativo, a se coloca antes que b. 
Si es positivo, b se coloca antes que a. Si es cero, su posición relativa no cambia.
 Esto asegura un orden ascendente para números.
*/

console.log(array); 

array.forEach((numero) => {
    return numero % 2 === 0;
})

console.log(array)