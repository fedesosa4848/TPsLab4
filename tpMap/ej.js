// Crear y manipular un Map:
// o Crea un Map con tres entradas: "nombre" -> "Juan", "edad" -> 30, "ciudad" ->
// "Madrid".
// o Añade una nueva entrada para "país" -> "España" y elimina la entrada
// "ciudad"

// Crear un Map con tres entradas
const persona = new Map([
    ["nombre", "Juan"],
    ["edad", 30],
    ["ciudad", "Madrid"]
]);

// Añadir una nueva entrada
persona.set("país", "España");

// Eliminar la entrada "ciudad"
persona.delete("ciudad");

// Imprimir el Map para ver los cambios
console.log(persona);

// Acceder a valores en un Map:
// Accede al valor de "nombre" en el Map creado y muéstralo.

console.log(`Nombre: ${persona.get("nombre")}`);
console.log(`Edad: ${persona.get("edad")}`);
console.log(`País: ${persona.get("país")}`);

// Iterar sobre un Map:
// Itera sobre las entradas del Map e imprime cada par clave-valor.

persona.forEach((valor, clave) => {
    console.log(clave + ": " + valor);
});

// Comprobar si una clave existe en un Map:
// Comprueba si existe la clave "nombre" en el Map creado y muéstralo.

console.log(persona.has("nombre"));
console.log(persona.has("edad"));
console.log(persona.has("país"));

// Convertir un Map a un Array:
// Convierte el Map creado en el ejercicio 11 a un array de arrays.

const arrayDeArrays = Array.from(persona);
console.log(arrayDeArrays);

//Op2
// const arrayDeArrays = [...persona];
// console.log(arrayDeArrays);