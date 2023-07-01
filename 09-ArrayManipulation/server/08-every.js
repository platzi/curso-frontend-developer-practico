const numberAleatory = [ 39, 40, 7, 14, 2, 7, 23, 15, 32, 8 ];

let rta = false;

for( let i = 0; i < numberAleatory.length; i++ ) {
  const elemento = numberAleatory[ i ];
  if( elemento <= 40) {
    rta = true;
  }
}

console.log( rta );

const rta2 = numberAleatory.every( (elemento) => elemento <= 40 );
console.log( rta2 );

/////////////////////////

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 15,
  },
];

const rtaTeam = team.every( (elemento) => elemento.age <= 15 );

console.log( rtaTeam );