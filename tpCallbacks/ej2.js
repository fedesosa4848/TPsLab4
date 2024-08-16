/*
Ejercicio 2: Callback con Retorno de Datos

Crea una función llamada `sumarAsync` que acepte dos números y una función de callback.
Esta función debe sumar los números y luego llamar a la función de callback con el resultado.
*/

function sumarAsync(num1, num2, callback){
    let resultado = num1 + num2;

    callback(resultado);
}

function resultadoCallback(resultado){
    console.log(resultado);
}

sumarAsync(5,5,resultadoCallback)

