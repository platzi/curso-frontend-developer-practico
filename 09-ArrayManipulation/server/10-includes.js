const pets = [ 'cat', 'dog', 'bat' ];

let includeInArr = false;
for( let i = 0; i < pets.length; i++) {
  const element = pets[ i ];
  if( element === 'dog' ) {
    includeInArr = true;
    break;
  }
}

console.log( 'for', includeInArr );

const rta = pets.includes( 'dog' );
console.log( 'includes', rta );