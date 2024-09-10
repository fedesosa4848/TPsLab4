// Crea una función llamada `obtenerDatosUsuario` que simule una solicitud HTTP para obtener
// datos de usuario. Esta función debe aceptar un ID de usuario y una función de callback. Luego,
// dentro de la función, debes simular una solicitud a una API y, cuando se complete, llamar a la
// función de callback con los datos del usuario.


// Función para mostrar los datos del usuario
function mostrarDatosUsuario(datos) {
    console.log("Datos recibidos:", datos);
  }
  
  // Función que simula la obtención de datos de usuario
  function obtenerDatosUsuario(idUsuario, callback) {
    console.log(`Obteniendo datos del usuario con ID: ${idUsuario}...`);
  
    // Simula una solicitud HTTP que tarda 2 segundos
    setTimeout(() => {
      // Datos simulados del usuario
      const datosUsuario = {
        id: idUsuario,
        nombre: "Juan Pérez",
        edad: 30,
        correo: "juan.perez@email.com"
      };
  
      // Llama al callback pasando los datos del usuario
      callback(datosUsuario);
    }, 2000); // Espera 2 segundos antes de ejecutar el callback
  }
  
  // Llamamos a obtenerDatosUsuario pasando la función mostrarDatosUsuario como callback
  obtenerDatosUsuario(123, mostrarDatosUsuario);