const elements = [ 32, 45, 105, 7 ];
const otherElements = [ 78, 43, 15, 3 ];

const newArrays = [ ...elements ];
for( let index = 0; index < otherElements.length; index++ ) {
  const element = otherElements[ index ];
  newArrays.push( element )
}

console.log( 'for', newArrays );

const arrayConcat = elements.concat( otherElements );

console.log( 'concat', arrayConcat );

const sreadOperator = [ ...elements, ...otherElements ];
console.log( 'sreadOperator', sreadOperator );

const concatRandom = [ ...elements, ...'RANDOM' ];
console.log( 'concatRandom', concatRandom );

elements.push( ...otherElements );
console.log( 'elements', elements );
