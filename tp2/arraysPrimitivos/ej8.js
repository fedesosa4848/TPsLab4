//8. Eliminar Valor: Elimina todas las ocurrencias de un valor específico de un arreglo.

const array = [10, 25, 1, 3, 1, 2, 3, 8];

function eliminarOcurrencias(numero, array) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === numero) {
            array.splice(i, 1);
        }
    }
}

eliminarOcurrencias(1, array);
console.log(array);

const array2 = [10, 25, 1, 3, 1, 2, 3, 8];

function eliminarOcurrencias2(numero, array2) {
    return array2.filter(item => item !== numero);
}

const nuevoArray = eliminarOcurrencias(1, array2);
console.log(nuevoArray);