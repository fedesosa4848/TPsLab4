/*
27. Crear una función `crearCalculadora` que retorne un objeto con métodos `sumar`, `restar`,
`multiplicar` y `dividir`
*/

function crearCalculadora() {
    return {
        sumar: function(num1, num2) {
            return num1 + num2;
        },
        restar: function(num1, num2) {
            return num1 - num2;
        },
        multiplicar: function(num1, num2) {
            return num1 * num2;
        },
        dividir: function(num1, num2) {
            if (num2 === 0) {
                throw new Error("División por cero no permitida");
            } else {
                return num1 / num2;
            }
        }
    };
}

const calculadora = crearCalculadora();

console.log(calculadora.sumar(2, 3));        // 5
console.log(calculadora.restar(5, 2));       // 3
console.log(calculadora.multiplicar(4, 3));  // 12
console.log(calculadora.dividir(10, 2));     // 5