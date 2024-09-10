//11. Agenda de Contactos: Crea una agenda de contactos con nombres, números de teléfono y correos electrónicos.

class Contacto {
    constructor(nombre,telefono,mail){
        this.nombre = nombre;
        this.telefono = telefono;
        this.mail = mail;
    }



    infoContacto (){
        return `Datos : ${this.nombre}, ${this.telefono}, ${this.mail}`;
    }
}

function Agenda () {
    this.contactos = new Map();

    this.agendar = function(contactoNuevo){
        if(contactoNuevo instanceof Contacto){
            if(this.contactos.has(contactoNuevo.telefono)){
                console.log("Contacto ya existente")
            }else{
                this.contactos.set(contactoNuevo.telefono,contactoNuevo);
            }
        }else {
            console.log("El objeto proporcionado no es una instancia de Contacto");
        }
    }

    this.mostrarAgenda = function(){
        this.contactos.forEach((Contacto,telefono)=>{
            console.log(`${telefono},${Contacto.infoContacto()}`);
        });
    }
}


const agenda = new Agenda();
const contacto1 = new Contacto("Juan Pérez", "123456789", "juan@example.com");
const contacto2 = new Contacto("Ana Gómez", "987654321", "ana@example.com");

agenda.agendar(contacto1);
agenda.agendar(contacto2);

agenda.mostrarAgenda();

const contacto3 = new Contacto("Ana Gómez", "987654321", "ana@example.com");
agenda.agendar(contacto3);
