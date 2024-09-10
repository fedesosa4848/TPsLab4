//13. Clasificación de Objetos: Ordena un arreglo de objetos por una propiedad específica.

const productos = [
    { nombre: 'ProdA', precio: 30 },
    { nombre: 'ProdB', precio: 10 },
    { nombre: 'ProdC', precio: 20 }
];

productos.sort((a, b) => a.precio - b.precio);

console.log(productos);
n  