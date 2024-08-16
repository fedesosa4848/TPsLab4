//Ej7 Crear un objeto literal `persona` con las propiedades `nombre`, `edad` y `profesion`.

const Persona = {
    nombre : "Pedro",
    edad : 45,
    profesion : "Empleado",
    estado : true,
    toString : function(){
        console.log("Hola mi nombre es "+ this.nombre);
    }
}

Persona.toString();


//Ej8 Crear un constructor 'Producto' que tome parámetros 'nombre', 'precio', 'stock'
//Y cree un objeto con esas propiedades.

function Producto (nombre,precio,stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock
}

var producto1 = new Producto("SmartTV", 5000, 20);

console.log(producto1)

//9. Crear un objeto `pelicula` utilizando el constructor `Pelicula` con propiedades como `titulo`,`director` y `anio`.

// Definir el constructor Pelicula
function Pelicula(titulo, director, anio) {
    this.titulo = titulo;
    this.director = director;
    this.anio = anio;
}

// Crear una instancia del objeto 'pelicula'
var miPelicula = new Pelicula("El Padrino", "Francis Ford Coppola", 1972);

// Acceder a las propiedades del objeto
console.log("Título:", miPelicula.titulo);
console.log("Director:", miPelicula.director);
console.log("Año:", miPelicula.anio);