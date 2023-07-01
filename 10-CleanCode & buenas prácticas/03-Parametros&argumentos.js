function suma( x, y ) {
  console.log( x + y );
}

suma( 5, 7 );

function sumaResto( x, y, ...args ) {
  console.log( args );
  console.log( x + y );
}

sumaResto( 5, 7, 2, 3 );

//> ---------------------------

const course = {
  title: 'JavaScript Definitivo',
  content: 'Todo lo que necesitas saber'
}

const courseCloned = Object.assign( {}, course );
console.log( courseCloned );

const courseSpread = { ...course }
console.log( courseSpread );

//> ---------------------------

const numbers = [ 1, 2, 3 ];
const clonedNumbers = numbers.slice();
console.log( clonedNumbers );

const spreadClonedNumbers = [ ...numbers ];
console.log( spreadClonedNumbers );

//> ---------------------------
let numberA = [ 10, 11, 12 ];
let numberB = [ 13, 14, 15 ];

let newListNumbers = [ ...numberA, ...numberB ];
console.log( newListNumbers );

//> ---------------------------

let numberArray =  [ 32, 43, 78, 92 ]

//> sin ARROW FUNCTION
let mapNotArrow = numberArray.map( function(n) {return n * 2} )
console.log( mapNotArrow );

//> con ARROW FUNCTION
let mapNumber = numberArray.map(e => e * 2)
console.log( mapNumber );

//> ---------------------------

const counter = {
  number: 0,
  intervalId: null,
  increse() {
    this.intervalId = setInterval( () => {
      console.log( ++this.number );
      if( this.number === 5 ) {
        clearInterval( this.intervalId );
      }
    }, 1000 )
  },
}

counter.increse();
/*
Se agregó la propiedad intervalId con un valor inicial de null para asegurarse 
de que tenga un valor definido antes de que se asigne un valor durante la ejecución 
de setInterval(). Cuando se llama a setInterval(), devuelve un identificador único
para la instancia de intervalo que se está ejecutando. Almacenar este identificador 
en la propiedad intervalId asegura que tengamos una forma de hacer referencia 
al intervalo específico que estamos ejecutando.
Inicializar intervalId con un valor null es simplemente una convención 
común en JavaScript para indicar que una variable aún no tiene un valor. 
De esta manera, si se accede a intervalId antes de que se ejecute setInterval(), 
su valor será null en lugar de generar un error de referencia a variable indefinida.
*/
/*
superUsuario -> 072032
puerto -> 5432
*/