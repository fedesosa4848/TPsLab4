// 1. Multiplicar números con un callback:
// o Crea una función multiplicar que acepte dos números y un callback.
// o Usa el callback para mostrar el resultado de multiplicar los dos números.

function multiplicar(num1, num2, callback) {
     const resultado = num1 * num2 
    callback(resultado);
}

multiplicar(5,5, (resultado) => {
    console.log(`El resultado de la suma es ${resultado}`);
})

