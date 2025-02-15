// FIND()

let multipleOf5 = [5, 10, 15, 20]
let firstNumberGreaterThan10 = multipleOf5.find(number => number > 10)

console.log(multipleOf5); // [5, 10, 15, 20]
console.log(firstNumberGreaterThan10); // 15

// FINDINDEX()
let randomNumber = [6, 14, 27, 56, 40]
let indexNumber = randomNumber.findIndex(number = number > 50)

console.log(randomNumber); // [6, 14, 27, 56, 40]
console.log(indexNumber); // 3