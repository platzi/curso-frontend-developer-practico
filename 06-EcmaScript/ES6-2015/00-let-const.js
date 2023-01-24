var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

///////////////////////

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

///////////////////////

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

///////////////////////

const fruits = () => {
  if(true) {
    var fruit1 = 'Apple'; // Function Scope
    let fruit2 = 'Banana'; // Block Scope
    const fruit3 = 'Kiwi'; // Block Scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}