// 9. Comprobar existencia en un Set:
// o Comprueba si el número 4 existe en el Set creado anteriormente y muestra el
// resultado.

const numeros = new Set([1, 2, 3, 4, 5]);

const existe = numeros.has(4);

console.log(existe);
