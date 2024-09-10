// 2. Operación con números usando callbacks:
// o Define una función operarNumeros que acepte dos números y un callback.
// o Crea dos callbacks, uno para sumar y otro para restar los números.

function operarNumeros(num1, num2, callback) {
    callback(num1, num2);
}

// Callback para sumar los números
function sumar(num1, num2) {
    console.log(`La suma de ${num1} y ${num2} es: ${num1 + num2}`);
}

// Callback para restar los números
function restar(num1, num2) {
    console.log(`La resta de ${num1} y ${num2} es: ${num1 - num2}`);
}

operarNumeros(10, 5, sumar); 
operarNumeros(10, 5, restar);