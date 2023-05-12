const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log( "products", products );
console.log( "myProducts", myProducts );
console.log( "-".repeat( 10 ) );

const product = products.find( item => item.id === '🍔' );
if( product ) {
  myProducts.push( product )
}
const notCake = products.findIndex( cake => cake.id === '🥞' );
if( notCake !== -1 ) {
  products.splice( notCake, 1 )
}

console.log( "products", products );
console.log( "myProducts", myProducts );

console.log( "-".repeat( 10 ) );

console.log( 'notCake', notCake );
console.log( "products with notCake", products );

// ------------------------

const fruits = [
  { title: 'Frutilla', price: 121, id: '🍓' },
  { title: 'Kiwi', price: 225, id: '🥝' },
  { title: 'Banana', price: 84, id: '🍌' },
];

console.log( 'Sin actualizar', fruits );

const update = {
  id: '🥝',
  changes: {
    price: 315,
    description: 'Son importados de Brasil'
  }
}

const productFruit = fruits.findIndex( item => item.id === update.id );
fruits[ productFruit ] = {
  ...fruits[ productFruit ],
  ...update.changes
}

console.log( 'Con actualización', fruits );

const array = [1,1,1,1]; 
const rtav = array.reduce((total, item) => total + item, 1)
console.log(rtav);
