const cows = 9;

const countCows = new Promise( function( resolve, reject ) {
  if( cows > 10 ) {
    resolve( `We have ${ cows } cows on de farm` )
  } else {
    reject('There is no cows on the farm')
  }
})

countCows.then(( result ) => {
  console.log( result );
}).catch(( error ) => {
  console.log( error );
}).finally( () => console.log( 'Final del programa' ) );