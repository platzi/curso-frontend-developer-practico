const items = [ 1, 6, 32, 7, 9, 15, 6, 15, 7, 32, 6 ];
const rta2 = items.reduce(( obj, item ) => {
  if( !obj[ item ] ) {
    obj[ item ] = 1;
  } else {
    obj[ item ] = obj[ item ] + 1;
  }
  return obj;
}, {});

console.log( 'rta2', rta2 );

////////////////////////

const data = [
  {
    name: 'Cristian',
    level: 'high'
  },
  {
    name: 'Nicolas',
    level: 'medium'
  },
  {
    name: 'Emiliano',
    level: 'low'
  },
  {
    name: 'Valentina',
    level: 'low'
  },
  {
    name: 'Sebastian',
    level: 'high'
  }
];

const rta3 = data
.map( item => item.level)
.reduce(( obj, item ) => {
  if( !obj[ item ] ) {
    obj[ item ] = 1;
  } else {
    obj[ item ] = obj[ item ] + 1;
  }
  return obj;
}, {});

console.log( 'rta3', rta3 );

////////////////////////

const arr = [ 1, 5, 9, 4, 5, 7, 8, 2, 3, 10, 3, 1, 5, 9, 1, 6]

const rangos = arr.reduce(( obj, item ) => {
  if( item <= 4 ) {
    obj[ '1-4' ] ++; // Esto seria lo mismo que obj[ '1-4' ] = obj[ '1-4' ] + 1;
  } else if( item <= 7 ) {
    obj[ '5-7' ] ++;
  } else {
    obj[ '8-10' ] ++;
  }

  return obj;
}, {
  '1-4': 0,
  '5-7': 0,
  '8-10': 0
});

console.log( 'rangos', rangos );
