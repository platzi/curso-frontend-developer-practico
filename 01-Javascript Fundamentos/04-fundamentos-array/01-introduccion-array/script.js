// 1. new Array() or Array()

const fruits = Array('apple', 'banana', 'orange')
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const numbers = Array(1, 2, 3, 4, 5)
console.log(numbers)

// 2. Array literal syntax
const oneNumber = [3]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)

const recipeIngredients = ['flour', 4, true, { ingredient: 'milk', quantity: '1 cup' }, false]
console.log(recipeIngredients)

// Accessing array elements
const firstFruits = fruits[0]
console.log(firstFruits)

// Length property
const numberOfFruits = fruits.length
console.log(numberOfFruits)

// -----------------

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