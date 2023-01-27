// Declaracion de la clase
class User {
  // Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Métodos
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
};

// Creando una instancia de la clase
const revelion = new User( 'Cristian', 37 );
console.log(`Hola ${revelion.name}. Cuantos años tienes? => ${revelion.age} años`);
console.log( revelion.uAge );
console.log( revelion.uAge = 27 );
