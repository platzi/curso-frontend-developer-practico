// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// object destructuring

let user = { username: 'Oscar', age: 34};
let {username, age} = user;
console.log(username, user.age)

// spread operator

let person= { name: 'oscar', age: 28};
let country = 'MX';

let data = {id: 1, ...person, country};
console.log(data);

// rest

function sum(num, ...value){
    console.log(value)
    console.log(num + value[1]);
    return num + value[1];
}


sum(10, 1, 2, 3, 40);