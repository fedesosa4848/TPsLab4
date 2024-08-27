//15. Carrito de Compras: Simula un carrito de compras que permite agregar, eliminar y calcular el total.

class Producto {
    #nombre;
    #cantidad;
    #precio
    constructor(nombre, cantidad,precio) {
        this.#nombre = nombre;
        this.#cantidad = cantidad;
        this.#precio = precio;
    }

    infoProducto() {
        return `Producto: ${this.#nombre}, cantidad: ${this.#cantidad}, precio: ${this.#precio}`;
    }

    get precio (){
        return this.#precio;
    }
}

function Carrito() {
    this.listaProductos = [];

    this.agregarProducto = function(producto) {
        if (producto instanceof Producto) {
            this.listaProductos.push(producto);
        }else{
            console.log("El obj no es un producto");
        }
    };

    this.mostrarProductos = function() {
        this.listaProductos.forEach(producto => {
            console.log(producto.infoProducto());
        });
    };

    this.eliminarProducto = function(nombreProducto) {
        const index = this.listaProductos.findIndex(producto => producto.nombre === nombreProducto);
        if (index !== -1) {
            this.listaProductos.splice(index, 1);
            console.log(`Producto "${nombreProducto}" eliminado.`);
        } else {
            console.log(`Producto "${nombreProducto}" no encontrado.`);
        }
    };

    this.calcularTotal = function (){
        let total = 0;
        this.listaProductos.forEach(producto =>{
            total += producto.precio;
        })
        return `Total: $${total}`;
    };
}

const carrito = new Carrito();

const producto1 = new Producto('Manzanas', 2, 3); // Precio por unidad
const producto2 = new Producto('Pan', 1, 5);
const producto3 = new Producto('Leche', 3, 2);

carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
carrito.agregarProducto(producto3);

carrito.mostrarProductos();
console.log(carrito.calcularTotal());

carrito.eliminarProducto('Pan');
carrito.mostrarProductos();
console.log(carrito.calcularTotal());