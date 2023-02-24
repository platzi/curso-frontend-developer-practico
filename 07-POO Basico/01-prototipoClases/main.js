// Prototipo con sintaxis de CLASES
class Jugador {
  constructor({name, edad, email, posicion = [], equipo}) {
    this.name = name;
    this.edad = edad;
    this.equipo = equipo;
    this.posicion = posicion;
    this.email = email;
  }

  alterPosicion(nuevaPosicion) {
    this.posicion.push( nuevaPosicion )
  }
}

const lionel = new Jugador({
  name: 'Lionel Messi',
  edad: 36,
  posicion: ['Mediocampista', 'Delantero Derecho'],
  email: 'liomessi@gmail.com',
  equipo: 'PSG'
})