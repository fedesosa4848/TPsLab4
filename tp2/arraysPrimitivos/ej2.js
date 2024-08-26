//2. Promedio: Calcula el promedio de los números en un arreglo.

const promedio = (arr) => {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma/arr.length;
}

console.log(promedio([10,520,12]));


