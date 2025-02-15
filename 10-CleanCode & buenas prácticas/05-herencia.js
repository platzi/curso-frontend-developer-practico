//> ANTES DEL ES6 --------------------//

//> Clase Padre
function Person( name ) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log( 'Hola. Soy ' + this.name )
}

//> Clase hija
function Developer( name ) {
  this.name = name
}

Developer.prototype = Object.create( Person.prototype )

Developer.prototype.writeCode = function( coffie ) {
  if( coffie ) console.log( 'I am working in a new feature' );
  else console.log( 'I need a coffee, please' );
}

var dev = new Developer( 'Alex' );
dev.greet();
dev.writeCode()

//> CON ES6 --------------------//

//> Clase Padre
class Person2 {
  constructor( name ) {
    this.name = name
  }
  
  greet() {
    console.log( `Hello I am a dog and my name is ${ this.name }` );
  }
}

//> Clase hija
class Developer extends Person2 {
  constructor( name ) {
    super( name )
  }

  writeCode( coffee ) {
    coffee ? console.log( 'I am developing a new feature' ) : console.log( 'I need coffee, please' );
  }
}

let dev = new Developer( 'Cande' );
dev.greet() //> Hello I am Cande
dev.writeCode(); //> I need coffee, please
dev.writeCode( true ); //> I am developing a new feature