//> ANTES DEL ES6
function Person( name ) {
  this.name = name;
}

Person.prototype.greet = function() {
  return 'Hola. Soy ' + this.name
}

var newPerson = new Person( 'Alex' );
console.log( newPerson.name );
console.log( newPerson.greet() );

//> CON ES6
class Animal {
  constructor( dog ) {
    this.name = dog
  }

  greet() {
    return 'Hello I am a dog and my name is ' + this.name
  }
}

let dog = new Animal( 'Oliver' )
console.log( dog.name );
console.log( dog.greet() );