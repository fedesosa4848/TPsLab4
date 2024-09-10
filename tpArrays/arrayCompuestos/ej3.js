//12. Búsqueda de Palabras: Dado un párrafo y una palabra, cuenta cuántas veces aparece la palabra en el párrafo.

const parrafo = `En un lugar de la Mancha, de cuyo nombre no quiero acordarme,
no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero,
adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca
que carnero, salpicón las más noches, duelos y quebrantos los sábados,
lentejas los viernes, algún palomino de añadidura los domingos, consumían
las tres partes de su hacienda. El resto della, con sus antiguos alfeizares,
hacíalo pasar de vez en cuando a algunos días con algo de yantar. Así pasó,
en cuanto hubo que dar crédito a un par de días, hasta que en la víspera de
un sábado comenzó el hidalgo a hablar de su lanza.`;

const parrafoSplit = parrafo.toLowerCase().split(/\s+/); // Divide el párrafo en palabras
console.log(parrafoSplit);
function buscarPalabra(palabra) {
    let contador = 0;
    for (let i = 0; i < parrafoSplit.length; i++) {
        if (parrafoSplit[i].includes(palabra.toLowerCase())) {
            contador++;
        }
    }
    return contador;
}

const cantidadOcurrencias = buscarPalabra("algo");

console.log(cantidadOcurrencias);
