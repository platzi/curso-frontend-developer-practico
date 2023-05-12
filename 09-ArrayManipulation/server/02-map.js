 /*
 El método map() en JavaScript es utilizado para transformar 
 un array al aplicar una función a cada uno de sus elementos 
 y devolver un nuevo array con los resultados.

 El método map() es muy útil cuando se desea transformar un 
 array sin modificar el original. También se puede utilizar 
 junto con otros métodos de array, como filter(), reduce(), 
 forEach(), entre otros, para realizar operaciones más 
 complejas en un conjunto de datos.
 */
 
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
console.log( 'new v1 - for', newArray );
console.log( 'new v2 - map', newArray2 );