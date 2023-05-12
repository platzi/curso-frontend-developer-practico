//> ÁMBITO GLOBAL -----------------//
let greeting = 'Hello World';

function greet () {
  console.log( greeting );
}

greet();

//> ÁMBITO LOCAL -----------------//
function getFruits () {
  let fruits = ['Manzana', 'Banana', 'Kiwi']
  console.log( 'Dentro del ámbito de la función', fruits );
}

getFruits();
console.log( 'Fuera del ámbito de la función', fruits );

//> ÁMBITO DE BLOQUE -----------------//
{
  let saludos = 'Hola Mundo';
  var lang = 'Español';
  console.log( 'Saludos desde el bloque', saludos );
}

console.log( 'idioma fuera del bloque', lang ); //> Español
console.log( saludos ); //> Uncaught ReferenceError: saludos is not defined

//> ÁMBITO ESTÁTICO -----------------//
const age = 32;

function printAge() {
  console.log( age );
}

function mainApp() {
  const age = 37;
  printAge();
}

mainApp();

//> HOISTING ------------------------//
nba();

function nba() {
  let player = 'Lebron James';
  console.log( player );
}

var playerFootball = 'Lionel Messi';

//> FUNCIÓN AUTOINVOCADA -> No necesita un llamado a la función para ejecutarse
(
  function() {
    console.log( playerFootball ); //> undefined
    var playerFootball = 'David Beckham';
    console.log( playerFootball ); //> David Beckham
  }
)()
