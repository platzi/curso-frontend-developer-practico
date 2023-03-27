const cristian = {
  name: 'Cristian',
  age: 37,
  approvedCourses: [ 'Curso 1' ],
  addCourses( newCourses ) {
    this.approvedCourses.push( newCourses )
  }
};

///////////////////
console.log(Object.keys( cristian ));
console.log(Object.values( cristian ));
console.log(Object.entries( cristian ));
console.log(Object.entries( cristian )[3]);

///////////////////
Object.defineProperty( cristian, 'navigator', {
  value: 'chrome',
  writable: true,
  enumerable: false, // Hace que no aparezca en la lista
  configurable: true,
});

Object.defineProperty( cristian, 'editor', {
  value: 'VSCode',
  writable: false, // Hace que no se pueda modificar pero si borrar
  enumerable: true,
  configurable: true,
});

Object.defineProperty( cristian, 'terminal', {
  value: 'powershell',
  writable: true,
  enumerable: true,
  configurable: false, // Nos deja configurar y no nos permite borrar
});

Object.defineProperty( cristian, 'pruebaNasa', {
  // No se puede configurar, no se puede borrar
  value: 'extraterrestres',
  writable: false,
  enumerable: false,
  configurable: false,
});

///////////////////
Object.seal( cristian ); // evita que se puedan borrar => configurable: false
Object.freeze( cristian ); // No podemos eliminar y tampoco sobrescribir, editarlas => configurable: false | writable: false

console.log(Object.getOwnPropertyNames( cristian ));

///////////////////
const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  }
};

const obj2 = {};

for( prop in obj1 ) {
  obj2[ prop ] = obj1[ prop ]
}

const obj3 = Object.assign( {}, obj1 );
const obj4 = Object.create( obj1 );

