const elements = [ 'Fire', 'Air', 'Water' ];

let rtaFinal = '';
const separator = '--';
for( let index = 0; index < elements.length; index++ ) {
  const element = elements[ index ];
  rtaFinal = rtaFinal + element + separator;
}

console.log( 'for', rtaFinal );

const rtaJoin = elements.join( '--' )
console.log( rtaJoin );

const title = 'Curso de manupulación de arrays';
const urlFinal = title.split( ' ' ).join( '-' ).toUpperCase();
console.log( urlFinal );