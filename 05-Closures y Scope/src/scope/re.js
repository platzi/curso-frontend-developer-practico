var firstName; // undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = 'Leonardo'; // declarar / asignar
lastName = 'Lionel'; // reasignar
console.log(lastName);

var secondName = 'Fernando'; // declarar / asignar
var secondName = 'Fabian'; // reasignar
console.log(secondName);

// Let
let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi';
console.log(fruit);

// let fruit = 'Banana'; // ERROR
console.log(fruit);

// const
const animal = 'dog'; // declarar y asignar
animal = 'cat'; // rasignado
// const animal = 'Lion';  // ERROR
console.log(animal);

/* Dependiendo del uso en que le damos al const podemos
trabajarlo o no. En este caso con el array, nos deja 
modificarlo sin ningún tipo de problemas */
const vehicles = [];
vehicles.push('😎');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
