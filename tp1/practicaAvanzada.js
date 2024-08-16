/*
21. Crear un objeto `coche` con propiedades como `marca`, `modelo` y `anio`, y métodos como
`arrancar` y `detener`
*/

function Coche (marca,modelo,anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio
    this.estado = 'detenido'; // Estado inicial del coche

    this.infoCoche = function() {
        return `Info: ${this.marca}, ${this.modelo}, ${this.anio}`;
    };

    this.arrancar = function() {
        if (this.estado === 'arrancado') {
            console.log("El coche ya está arrancado.");
        } else if (this.estado === 'detenido') {
            this.estado = 'arrancado';
            console.log("El coche está arrancando.");
        }
    };

    this.detener = function() {
        if (this.estado === 'detenido') {
            console.log("El coche ya está detenido.");
        } else if (this.estado === 'arrancado') {
            this.estado = 'detenido';
            console.log("El coche está deteniéndose.");
        }
    };
}

const miCoche = new Coche("Toyota", "Corolla", 2021);

console.log(miCoche.infoCoche());  // Muestra: Info: Toyota, Corolla, 2021
miCoche.arrancar();               // Muestra: El coche está arrancando
miCoche.arrancar();               // Muestra: El coche ya está arrancado.
miCoche.detener();                // Muestra: El coche está deteniéndose
miCoche.detener();                // Muestra: El coche ya está detenido.

/*
22. Crear un constructor `Persona` con propiedades `nombre` y `edad`, y un método `saludar`
que imprima un saludo personalizado.
*/

function Persona (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    this.saludo = function (){
        console.log(`Hola. Yo soy ${this.nombre}`);
    }
}

let persona1 = new Persona("Juan",18);
persona1.saludo();

/*
23. Crear un método `agregarProducto` a la función constructora `Carrito` que agregue un
producto al carrito.
*/

function Producto (nombre,precio,stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock
}

// Constructor para Carrito
function Carrito() {
    this.listaProductos = [];

    this.agregarProducto = function(producto) {
        if (producto instanceof Producto) {
            this.listaProductos.push(producto);
        } else {
            console.log("El producto no es válido.");
        }
    };

    this.mostrarCarrito = function() {
        console.log("Contenido del carrito:");
        this.listaProductos.forEach(prod => {
            console.log(`Nombre: ${prod.nombre}, Precio: ${prod.precio}, Stock: ${prod.stock}`);
        });
    };
}

