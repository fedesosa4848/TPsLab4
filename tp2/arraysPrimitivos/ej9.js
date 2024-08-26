//9. Combinar Arreglos: Combina dos arreglos en uno solo, asegurándote de que no haya duplicados.

const array1 = [10,15,30,50,10,15]; 

const array2 = [10,9,25,30,50,15];

const arrayUnificado = [...new Set(array1.concat(...array2))];

console.log(arrayUnificado);
