// 4. Filtrar números pares con un callback:
// o Define una función filtrarPares que acepte un array de números y un callback.
// o Usa el callback para filtrar solo los números pares.



function filtrarPares(numeros, callback) {

    const numerosPares = callback(numeros);
    console.log(numerosPares);
}

// Callback que filtra los números pares
function callback(numeros) {
    return numeros.filter(num => num % 2 === 0);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

filtrarPares(numeros, callback);