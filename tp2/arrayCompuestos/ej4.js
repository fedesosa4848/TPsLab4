//13. Clasificación de Objetos: Ordena un arreglo de objetos por una propiedad específica.

const productos = [
    { nombre: 'Producto A', precio: 30 },
    { nombre: 'Producto B', precio: 10 },
    { nombre: 'Producto C', precio: 20 }
];

productos.sort((a, b) => a.precio - b.precio);

console.log(productos);
