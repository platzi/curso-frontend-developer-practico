const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log( months );

const numbers = [1, 30, 4, 21, 100000];
numbers.sort( ( a,b ) => a - b );
console.log( numbers );

const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];
words.sort( ( a,b ) => a.localeCompare( b ) );
console.log( words );

/*
La función localeCompare() compara dos cadenas de texto y devuelve un número negativo, 
cero o positivo dependiendo del orden de clasificación de los elementos. Al pasar esta 
función como argumento para sort(), se ordenarán los elementos en función de 
su orden de clasificación local.
*/

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
    date: new Date( 2019, 2, 15 )
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    date: new Date( 2016, 7, 10 )
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
    date: new Date( 2023, 8, 18 )
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    date: new Date( 2022, 11, 7 )
  },
];

orders.sort( ( a, b ) => a.total - b.total );
console.log( 'Orden por total', orders );

orders.sort( ( a, b ) => a.date - b.date );
console.log( 'Orden por date', orders );