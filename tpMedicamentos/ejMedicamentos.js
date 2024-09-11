// 1. Clase Medicamento:
// Propiedades: id, nombre, precio, stock.
// Métodos:
// •
// mostrarDetalles(): Muestra por consola los detalles del medicamento.


class Medicamento{
    constructor(id,nombre,precio,stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    mostrarDetalles() {
        return `Id Medicamento: ${this.id}
        Nombre: ${this.nombre}
        Precio: ${this.precio}
        Stock: ${this.stock}`;
    }
}


// Propiedades: medicamentos (arreglo de objetos Medicamento).
// Métodos:
// •
// agregarMedicamento(medicamento): Agrega un medicamento al inventario.
// •
// buscarMedicamento(id): Busca un medicamento por su id.
// •
// mostrarInventario(): Muestra todos los medicamentos en el inventario.
// •
// actualizarStock(id, cantidad): Actualiza el stock de un medicamento en el inventario.

class Inventario {
    constructor(){
        this.inventario = [];
    }

    agregarMedicamento (medicamento){
        if(!(medicamento instanceof Medicamento)){
            throw new notMedicament ("El elemento no es un Medicamento")
        }
        this.inventario.push(medicamento);
    }

    buscarMedicamento(id){
        return this.inventario.find(medicamento => medicamento.id === id) || null;
    }

    mostrarInventario(){
        if (this.inventario.length === 0) {
            console.log("El inventario está vacío.");
            return;
        }
        this.inventario.forEach(medicamento => {
            console.log(medicamento.mostrarDetalles());
            console.log('---');
        });
    }

    actualizarStock(id,stockNuevo){
        const buscado = this.buscarMedicamento(id);

        if(buscado === null ){
            console.log("Medicamento no encontrado")
        }else{
            buscado.stock = stockNuevo;
        }
    }
}

// 3. Clase Venta:
// Propiedades: medicamento, cantidad, total.
// Métodos:
// registrarVenta(): Registra una venta, actualizando el stock del medicamento.

class Venta {
    constructor(medicamento, cantidad) {
        this.medicamento = medicamento;
        this.cantidad = cantidad;
        this.total = medicamento.precio * cantidad;
        this.fecha = new Date();
    }

    registrarVenta(inventario) {
        if (this.cantidad > this.medicamento.stock) {
            console.log("Stock insuficiente para completar la venta.");
            return;
        }

        this.medicamento.stock -= this.cantidad;
        inventario.actualizarStock(this.medicamento.id, this.medicamento.stock);

        console.log(`Venta realizada: ${this.fecha}
        Medicamento: ${this.medicamento.nombre}
        Cantidad: ${this.cantidad}
        Precio Unitario: ${this.medicamento.precio}
        Total: ${this.total}`);
    }
}

// 4. Funciones de flecha:
// Crear funciones de flecha para mostrar reportes, como los medicamentos 
// en stock bajo, o el total de ventas realizadas.


const disponibilidadBaja = (inventario) => {
    inventario.forEach((medicamento) => {
        if (medicamento.stock < 5) {
            console.log(medicamento.nombre);
        }
    });
};

class RegistroVentas {
    constructor() {
        this.ventas = [];
    }

    agregarVenta(venta) {
        if (!(venta instanceof Venta)) {
            throw new Error("El elemento no es una Venta");
        }
        this.ventas.push(venta);
    }

    verVentasRealizadas() {
        if (this.ventas.length === 0) {
            console.log("No se han realizado ventas.");
            return;
        }
        this.ventas.forEach(venta => {
            console.log(`Venta: ${venta.fecha}
            Medicamento: ${venta.medicamento.nombre}
            Cantidad: ${venta.cantidad}
            Precio Unitario: ${venta.medicamento.precio}
            Total: ${venta.total}`);
            console.log('---');
        });
    }
}

// Simulación del Sistema

// Crear instancias
const inventario = new Inventario();
const registroVentas = new RegistroVentas();

// Agregar medicamentos al inventario
const medicamento1 = new Medicamento(1, 'Paracetamol', 50, 10);
const medicamento2 = new Medicamento(2, 'Ibuprofeno', 100, 5);
const medicamento3 = new Medicamento(3, 'Aspirina', 30, 20);

inventario.agregarMedicamento(medicamento1);
inventario.agregarMedicamento(medicamento2);
inventario.agregarMedicamento(medicamento3);

// Mostrar inventario inicial
console.log("Inventario inicial:");
inventario.mostrarInventario();

// Realizar ventas
const venta1 = new Venta(medicamento1, 3);
venta1.registrarVenta(inventario);
registroVentas.agregarVenta(venta1);

const venta2 = new Venta(medicamento2, 2);
venta2.registrarVenta(inventario);
registroVentas.agregarVenta(venta2);

// Mostrar inventario después de las ventas
console.log("Inventario después de ventas:");
inventario.mostrarInventario();

// Mostrar ventas realizadas
console.log("Ventas realizadas:");
registroVentas.verVentasRealizadas();