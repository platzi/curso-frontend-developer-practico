// includes() with numbers

const numbers = [1, 2, 3, 4, 5]
const result1 = numbers.includes(3)

console.log(numbers);
console.log(result1); // true

const result2 = numbers.includes(7)
console.log(result2); // false

// indexOf()
const fruits = ['apple', 'cherry', 'grape', 'mango']
const index1 = fruits.indexOf('grape')
console.log(index1); // 2

const index2 = fruits.indexOf('blueberry')
console.log(index2); // -1

// lastIndexOf()
const numbersAgain = [2, 4, 6, 8, 10, 6]
const lastIndex1 = numbersAgain.lastIndexOf(6)
console.log(lastIndex1); // 5

const lastIndex2 = numbersAgain.lastIndexOf(3)
console.log(lastIndex2); // -1