//10. Crear un array `frutas` con varios nombres de frutas. Imprimir el tercer elemento del array.

const arrayFrutas = ["manzana", "pera", "naranja", "banana", "kiwi"];
console.log(arrayFrutas[2]);

//11. Agregar una fruta más al final del array `frutas`. Imprimir el array actualizado.

arrayFrutas.push("uva");
console.log(arrayFrutas);

//12. Crear una función `filtrarPares` que tome un array de números como parámetro y retorne un nuevo array solo con los números pares.

/*
Opción 1

const arrayNumeros = [40,55,80,70,60];
const arrayPar = [];
arrayNumeros.forEach(element => {
    if(element % 2 == 0){
        arrayPar.push(element);
    }
});

console.log(arrayPar);
*/

const arrayNumeros = [40, 55, 80, 70, 60];
const arrayPar = arrayNumeros.filter(element => element % 2 === 0); //Filter:  crear un nuevo arreglo basado en una condición

console.log(arrayPar); // Output: [40, 80, 70, 60] 
