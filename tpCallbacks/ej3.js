/*
Sintaxis setTimeout

setTimeout(callback, delay, [arg1, arg2, ...]);

callback: La función que se ejecutará después del retraso.
delay: El tiempo en milisegundos que debes esperar antes de ejecutar la función de callback. 1000 milisegundos equivalen a 1 segundo.
[arg1, arg2, ...]: Opcional. Argumentos que se pasarán a la función de callback.

*/

/*
Ejercicio 3: Uso de setTimeout

Escribe una función llamada `retrasarEjecucion` que acepte una función de callback y un
número de milisegundos. La función debe llamar al callback después de la cantidad
especificada de tiempo utilizando `setTimeout`
*/

function retrasarEjecucion (callback,tiempo){

    setTimeout(callback,tiempo);
}

function miCallback(){
    console.log("Hola, me retrase ");
}

retrasarEjecucion(miCallback,2000);

//Opcion 2

// Función que acepta un callback y un tiempo en milisegundos
function retrasarEjecucion(callback, tiempo) {
    // Usa setTimeout para ejecutar el callback después del tiempo especificado
    setTimeout(() => callback(tiempo), tiempo);
}

// Función de callback que acepta el tiempo como argumento
function miCallback(tiempo) {
    console.log("Hola, me retrase " + tiempo + " milisegundos");
}

// Llama a retrasarEjecucion con miCallback y un retraso de 2000 milisegundos (2 segundos)
retrasarEjecucion(miCallback, 2000);






