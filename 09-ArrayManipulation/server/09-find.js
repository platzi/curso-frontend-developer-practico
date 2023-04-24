const numbers = [ 3, 50, 32, 23, 5, 6, 10 ];

let rta = undefined;
for( let i = 0; i < numbers.length; i++ ) {
  const element = numbers[ i ];
  if( element === 32 ) {
    rta = element;
    break;
  }
}

console.log( 'for', rta );

const rta2 = numbers.find( (element) => element === 32 );
console.log( 'find', rta2 );

/////////////////////////

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find( element => element.id === '🌭');
console.log( 'find', rta3 );

const rta4 = products.findIndex( productItem => productItem.id === '🌭');
console.log( 'findIndex', rta4 );