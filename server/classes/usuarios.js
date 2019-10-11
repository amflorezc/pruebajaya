// {
//     id: 'ALkjdaklsdj-asdkj',
//     nombre: 'Alejandra Florez',
// }Ejemplo ***

class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        // objecto de persona que se conecta al chat de una sala
        let persona = { id, nombre, sala };
        this.personas.push(persona);
        return this.personas;
    }

    //Obtiene personas o usuario por id
    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0];

        return persona;
    }

    //Retorna todas las personas conectadas
    getPersonas() {
        return this.personas;
    }

    //Ontiene todas las personas conectadas en una sala
    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    // Elina una persona por id de la lista de personas
    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);
        //Se filtra todas las persona menos la persona que se va a borrar
        this.personas = this.personas.filter(persona => persona.id != id);
        return personaBorrada;

    }


}


module.exports = {
    Usuarios
}