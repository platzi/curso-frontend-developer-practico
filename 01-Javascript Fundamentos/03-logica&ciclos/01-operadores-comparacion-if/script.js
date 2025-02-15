let a = 10
let b = 20
let c = '10'

let nameUser = 'Leonardo'

if (a == c) {
  console.log('Son iguales de valor');
}

if (a === c) {
  console.log('Son iguales de valor');
} else {
  console.log('No son iguales. Si de valor pero no de tipo');
}

if (nameUser == 'Leonardo') {
  console.log(`Hola ${nameUser}`);
} else if (nameUser === 'Cristian') {
  console.log(`Hola ${nameUser}`);
} else {
  console.log('Nombre no válido');
}