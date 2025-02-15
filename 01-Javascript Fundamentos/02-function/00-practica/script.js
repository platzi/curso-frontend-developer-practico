function personajeDragonBall(name, raza, homePlanet) {
  this.name = name
  this.raza = raza
  this.homePlanet = homePlanet
  this.invencible = false

  this.displayInfo = function () {
    console.log(`Información del guerrero:
    Nombre: ${this.name}
    Raza: ${this.raza}
    Planeta Natal: ${this.homePlanet}
    ${this.invencible ? 'Es invencible' : 'No es invencible'}
    `)
  }

  this.becomeInvencible = function () {
    this.invencible = true
    console.log(`\n${this.name} es un ${this.raza} que es invencible a nivel Galactico \n`);
  }
}

const goku = new personajeDragonBall('Goku', 'Saiyajin', 'Vegeta')
const piccolo = new personajeDragonBall('Piccolo', 'Namekiano', 'Namek')
const gohan = new personajeDragonBall('Gohan', 'Mestizo Humano/Saiyajin', 'Tierra')
const mrs = new personajeDragonBall('Mr. Satan', 'Humano', 'Tierra')
const krilin = new personajeDragonBall('Krilin', 'Humano', 'Tierra')

goku.becomeInvencible()
goku.displayInfo()
piccolo.displayInfo()
gohan.displayInfo()
mrs.displayInfo()
krilin.displayInfo()