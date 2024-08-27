/*
1. Crear un Objeto Literal
• Crea un objeto literal llamado “persona” con las propiedades “nombre”,
“edad” y “profesión”. Asigna valores a cada propiedad y muestra el objeto
en la consola
*/

const Persona = {
    nombre : "Pedro",
    edad : 45,
    profesion : "Empleado",
    estado : true,
}

/*
2. Acceder a Propiedades de un Objeto
• Accede y muestra en la consola la propiedad “nombre” del objeto
“persona” creado en el ejercicio 1.
*/

console.log(Persona.nombre);

/*
3. Actualizar una Propiedad de un Objeto
• Cambia la propiedad “edad” del objeto “persona” a un nuevo valor y
muestra el objeto actualizado en la consola.
*/

Persona.edad = 28;

console.log(Persona);

/*
4. Eliminar una Propiedad de un Objeto
• Elimina la propiedad “profesión” del objeto “persona” y muestra el objeto
actualizado en la consola.
*/

delete Persona.profesion;

console.log(Persona);
