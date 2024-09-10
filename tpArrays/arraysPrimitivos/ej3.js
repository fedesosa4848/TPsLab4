//3. Máximo y Mínimo: Encuentra el número máximo y el número mínimo en un arreglo de números.

const arregloNumero = [5, 18, 30, 20];
let menor = arregloNumero[0];
let mayor = arregloNumero[0];

for (let i = 1; i < arregloNumero.length; i++) {
    menor = esMenor(arregloNumero[i], menor);
    mayor = esMayor(arregloNumero[i], mayor);
}

console.log("Menor:", menor);
console.log("Mayor:", mayor);

function esMenor(num1, num2) {
    return num1 < num2 ? num1 : num2;
}

function esMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
