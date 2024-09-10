// 11. Crear y manipular un Map:
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
