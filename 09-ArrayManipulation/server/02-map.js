 const letters = [ 'a' , 'b' , 'c' , 'd' , 'e' ];

 // RECORRIDO DEL ARRAY
 // Opción 1
 const newArray = [];
 for( let i = 0 ; i < letters.length; i++) {
  const element = letters[i];
  newArray.push( element + '++' );
}
// Opción 2
const newArray2 = letters.map( letter => letter + '++')

console.log( 'original', letters );
console.log( 'new', newArray );
console.log( 'new', newArray2 );