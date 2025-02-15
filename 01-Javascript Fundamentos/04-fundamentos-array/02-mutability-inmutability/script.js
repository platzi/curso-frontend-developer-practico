const fruits = Array('apple', 'banana', 'orange')

// Mutability
fruits.push('watermelon')
console.log(fruits)

// Inmutability
const newFruits = fruits.concat('grape', 'kiwi')
console.log(newFruits)
console.log(fruits)

// Checking arrays with Array.isArray()
const isArray = Array.isArray(fruits)
console.log(isArray)

// Practical exercise: sum all elements of an array
const numberArray = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numberArray.length; i++) {
  sum += numberArray[i]
}

console.log(sum);