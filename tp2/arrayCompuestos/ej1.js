//10. Lista de Compras: Crea una lista de compras que incluya productos y sus cantidades.


let miArray = new Array(10);
miArray.sort((a,b) => a - b );

for(let i = 0; i< miArray.length; i++){
    miArray[i] = Math.random((1,9)*100)
}
miArray.sort((a,b) => a - b );

console.log(miArray);

const readline = require('readline-sync');

class Producto {
    #nombre;
    #cantidad;
    constructor(nombre, cantidad) {
        this.#nombre = nombre;
        this.#cantidad = cantidad;
    }

    infoProducto() {
        return `Producto: ${this.#nombre}, cantidad: ${this.#cantidad}`;
    }
}

function Carrito() {
    this.listaProductos = [];

    this.agregarProducto = function(producto) {
        if (producto instanceof Producto) {
            this.listaProductos.push(producto);
        }
    };

    this.mostrarProductos = function() {
        this.listaProductos.forEach(producto => {
            console.log(producto.infoProducto());
        });
    };
}

const miCarrito = new Carrito();

let continuar = 's';
while (continuar === 's') {
    const nombre = readline.question("Ingrese el nombre del producto: ");
    const cantidad = parseInt(readline.question("Cantidad? "), 10);

    const producto = new Producto(nombre, cantidad);
    miCarrito.agregarProducto(producto);

    continuar = readline.question("¿Desea cargar más productos a la lista? (s/n): ").toLowerCase();
}

miCarrito.mostrarProductos();
