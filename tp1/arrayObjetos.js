//18. Crear un array de objetos `estudiantes`, donde cada objeto tenga propiedades como `nombre`, `edad` y `promedio`.
/*
function estudiante (nombre,edad,promedio){
    this.nombre = nombre,
    this.edad = edad,
    this.promedio = promedio

    this.infoEstudiante = function (){
        console.log(this.nombre+" "+this.edad+" "+this.promedio);
    }
}

const arrayEstudiantes = [];
let mander = 's';

let aux;
while(mander === 's'){

    let nombre = prompt("Ingrese el nombre");
    let edad = parseInt(prompt("Ingrese la edad"));
    let promedio = parseFloat(prompt("Ingrese el promedio"));

    aux = new estudiante(nombre,edad,promedio);
    arrayEstudiantes.push(aux);

    mander = prompt("Desea cargar mas alumnos?");
}

arrayEstudiantes.forEach(est => est.infoEstudiante());


*/

const readline = require('readline-sync');

function Estudiante(nombre, edad, promedio) {
    this.nombre = nombre;
    this.edad = edad;
    this.promedio = promedio;

    this.infoEstudiante = function() {
        return `${this.nombre} ${this.edad} ${this.promedio}`;
    };
}

const arrayEstudiantes = [];
let mander = 's';

while (mander === 's') {
    let nombre = readline.question("Ingrese el nombre: ");
    let edad = parseInt(readline.question("Ingrese la edad: "));
    let promedio = parseFloat(readline.question("Ingrese el promedio: "));

    let aux = new Estudiante(nombre, edad, promedio);
    arrayEstudiantes.push(aux);

    mander = readline.question("Desea cargar más alumnos? (s/n): ");
}


// Mostrar la información de cada estudiante usando el método infoEstudiante
arrayEstudiantes.forEach(est => est.infoEstudiante());



/*
19. Crear una función `buscarEstudiante` que tome un array de estudiantes y un nombre, y
retorne el objeto del estudiante con ese nombre.
*/

function buscarEstudiante (arrayEstudiantes,nombre){
    let estudiante = arrayEstudiantes.find(est => est.nombre === nombre);
    return estudiante;
}

let estudianteBuscado = buscarEstudiante(arrayEstudiantes,"Federico");

if(estudianteBuscado){
    console.log(estudianteBuscado.infoEstudiante());
}else{
    console.log("Estudiante no encontrado");
}

/*
20. Crear una función `promedioClase` que tome el array de estudiantes y retorne el promedio
de sus promedios.
*/

function promedioClase (arrayEstudiantes){
    let promedioTotal = 0;
    for(let index = 0; index < arrayEstudiantes.length; index++){
        promedioTotal += arrayEstudiantes[index].promedio;
    }
    let promedioFinal = promedioTotal/arrayEstudiantes.length;
    return promedioFinal;
}

console.log(`Promedio de la clase: ${promedioClase(arrayEstudiantes)}`);
