function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log( g.next().value );
console.log( g.next().value );
console.log( g.next().value );

// -----

function* iterate( array ) {
  for( let value of array ) {
    yield value
  }
}

const it = iterate([ 'cristian', 'male', 'emanuel', 'emiliano' ]);
console.log( it.next().value );