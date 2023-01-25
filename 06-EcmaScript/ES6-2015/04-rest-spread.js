// ARRAYS DESTRUCTURING

let fruits = ['Apple', 'Banana', 'Kiwi'];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]);

// OBJECT DESTRUCTURING
let user = {username: 'Cristian', age: 37};
let {username, age} = user;
console.log(username, age); 
console.log(user.username, user.age);

// SPREAD OPERATOR
let person = {nombre: 'Dante', edad: 46};
let pais = 'AR';

let data = {...person, pais};
console.log(data);

let data2 = {id: 1, ...person, pais};
console.log(data2);

// REST
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[1]);
}

sum(2, 4, 7, 14);