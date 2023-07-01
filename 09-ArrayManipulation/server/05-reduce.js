const totals = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let sum = 0;
for( let i = 0; i < totals.length; i++ ) {
  const total = totals[i];
  sum = sum + total;
}

console.log( 'sum', sum );

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const rta = numbers.reduce( ( accumulator, element ) => accumulator + element, 0 );
console.log( 'rta', rta );
