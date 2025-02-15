const originalArray = [1, 2, 3, 4, 5]
const copyOfArray = [...originalArray]

// El spread operator hace una copia sin modificar el original
console.log(originalArray);
console.log(copyOfArray);

// 2. Combining Arrays
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const combinedArrays = [...array1, ...array2]

console.log(array1);
console.log(array2);
console.log(combinedArrays);

// 3. Creating Arrays with Additional Elements
const baseArray = [1, 2, 3]
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6, 7]

console.log(baseArray);
console.log(arrayWithAdditionalElements);

// 4. Pass elements to functions
function sum(a, b, c) {
  return a + b + c
}

const numbers = [1, 2, 3]
const result = sum(...numbers)

console.log(result);