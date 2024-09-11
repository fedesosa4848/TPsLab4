class notMedicament extends Error {
    constructor(mensaje) {
        super(mensaje); // Llama al constructor de la clase base Error
        this.name = 'notMedicament'; // Nombre del error personalizado
    }
}