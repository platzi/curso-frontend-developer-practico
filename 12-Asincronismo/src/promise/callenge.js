import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData( urlApi ) {
  return fetch( urlApi )
}

fetchData( `${ API }/products` )
  .then( response => response.json() )
  .then( products => {
    const product = products.find( item => item.id === 19 )
    console.log( product );
    if( product ) {
      return fetchData( `${ API }/products/${ products.id }` )
    } else {
      throw new Error( 'El producto no existe' )
    }
  })
  .then( response => response.json() )
  .then( product => {
    console.log( product.title );
    return fetchData( `${ API }/categories/${ product.category.id }`)
  })
  .then( response => response.json() )
  .then( category => {
    console.log( category.name );
  })
  .catch( err => console.log( err ) )
  .finally( () => console.log( 'Finally' ));