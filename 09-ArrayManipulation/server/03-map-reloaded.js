const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

console.log( 'original', orders );
const rta = orders.map( item => item.total );
console.log( 'rta', rta );

////////////////

const rta3 = orders.map( item => {
  return {
    ...item, // spread operator hace que se cree una copia del objeto original y no se modifique la referencia en memoria.
    tax: 0.19
  }
});

console.log( 'original', orders) ;
console.log( 'rta3', rta3 );

////////////////

const rta2 = orders.map( item => {
  // Estamos modificando el objeto original, la referencia en memoria
  item.tax = 0.19;
  return item;
});

console.log( 'original', orders) ;
console.log( 'rta2', rta2 );