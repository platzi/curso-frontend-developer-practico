const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const newWords = [];
for( let i = 0; i < words.length; i++ ) {
  const word = words[ i ];
  if( word.length > 6 ) {
    newWords.push( word );
  };
}
console.log( 'newWords', newWords);
console.log( 'original', words);

// Filter
const result = words.filter(word => word.length > 6);
console.log(result);

////////////////////

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

const filterOrders = orders.filter( order => order.delivered === false );
console.log( 'filterOrders', filterOrders );

////////////////////

const persons = [
  {
    name: 'Cristian',
    age: 30,
    email: 'cristian@gmail.com'
  },
  {
    name: 'Nicolas',
    age: 25,
    email: 'nicolas@gmail.com'
  },
  {
    name: 'Emiliano',
    age: 38,
    email: 'emiliano@gmail.com'
  },
  {
    name: 'Valentina',
    age: 18,  
    email: 'vale@gmail.com'
  },
  {
    name: 'Nicole',
    age: 15,
    email: undefined
  },
  {
    name: 'Santiago',
    age: 11,
    email: undefined
  },
  {
    name: 'Zulema',
    age: 40,
    email: undefined
  }
]

const filterPersons = persons.filter( person => person.email === undefined );
console.log( 'filterPersons', filterPersons );

const agePerson = persons.filter( person => person.age < 18 );
console.log( 'agePerson', agePerson );

const search = ( query ) => {
  return persons.filter( person => {
    return person.name.includes( query );
  });
}

console.log( search('Ni'));