/*
24. Crear una función `ordenarNumeros` que tome un array de números como parámetro y
retorne un nuevo array con los números ordenados de menor a mayor
*/

const arrayNumeros = [45,20,10,90,55];

const arrayOrdenado = arrayNumeros.sort();
console.log(arrayOrdenado);

/*
25. Crear una función `eliminarEstudiante` que tome un array de estudiantes y un nombre, y
retorne un nuevo array sin el estudiante con ese nombre.
*/


function Estudiante(nombre, edad, promedio) {
    this.nombre = nombre;
    this.edad = edad;
    this.promedio = promedio;

    this.infoEstudiante = function() {
        return `${this.nombre} ${this.edad} ${this.promedio}`;
    };
}

const estudiantes = [
    new Estudiante("Juan Pérez", 20, 8.5),
    new Estudiante("Ana Gómez", 22, 9.0),
    new Estudiante("Carlos López", 19, 7.8),
    new Estudiante("Laura Martínez", 21, 8.2),
    new Estudiante("Pedro Fernández", 23, 9.3)
];

console.log(estudiantes.map(est => est.infoEstudiante()).join('\n'));

function eliminarEstudiante(estudiantes,nombre){
    let arrayFiltrado = estudiantes.filter(est => est.nombre !== nombre);
    return arrayFiltrado;
}

// Llama a la función pasando el nombre a eliminar
let nombreAEliminar = "Carlos López";
console.log(`Array filtrado: `, eliminarEstudiante(estudiantes, nombreAEliminar));


function Producto (nombre,precio,stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock
}

/*
26. Crear una función `totalCarrito` que tome un array de productos y retorne el precio total de
los productos.
*/

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

const producto1 = new Producto("Laptop", 999.99, 10);
const producto2 = new Producto("Smartphone", 499.99, 25);
const producto3 = new Producto("Cámara", 299.99, 15);
const producto4 = new Producto("Auriculares", 79.99, 50);
const producto5 = new Producto("Reloj", 149.99, 30);

const miCarrito = new Carrito();

miCarrito.agregarProducto(producto1);
miCarrito.agregarProducto(producto2);
miCarrito.agregarProducto(producto3);
miCarrito.agregarProducto(producto4);
miCarrito.agregarProducto(producto5);

function totalCarrito(Carrito){
    let total = 0;
    for(let index = 0; index < Carrito.listaProductos.length; index++){
        total += Carrito.listaProductos[index].precio;
    }
    return total;
}

console.log(totalCarrito(miCarrito));