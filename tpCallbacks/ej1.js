/*
Ejercicio 1: Función Callback Básica

Escribe una función llamada `mostrarMensaje` que acepte un mensaje como argumento y una
función de callback. La función `mostrarMensaje` debe mostrar el mensaje y luego llamar a la
función de callback
*/

// Función que acepta un mensaje y una función de callback
function mostrarMensaje(mensaje, callback) {
    // Mostrar el mensaje en la consola
    console.log(mensaje);
    
    // Llamar al callback después de mostrar el mensaje
    callback();
}

// Definir una función de callback que se ejecutará después de mostrar el mensaje
function miCallback() {
    console.log("Este es el callback que se ejecuta después del mensaje.");
}

// Llamar a `mostrarMensaje` con un mensaje y el callback `miCallback`
mostrarMensaje("Hola, mundo!", miCallback);
