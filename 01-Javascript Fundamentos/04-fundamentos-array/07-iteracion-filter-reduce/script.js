// FILTER
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers);
console.log(evenNumbers); // {2, 4, 6, 8, 10}

// REDUCE | case 1
let numbersReduce = [1, 2, 3, 4, 5]
let sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
/* El reduce toma una función de callback como argumento, junto con un valor inicial opcional.
La función de callback proporcionada toma dos parámetros: accumulator y currentValue. 
accumulator es el valor acumulado resultante de las operaciones anteriores, 
y currentValue es el valor del elemento actual del array que está siendo procesado.
*/

console.log(numbersReduce); // 15
console.log(sum);

// REDUCE | case 2
let words = ['hello', 'bye', 'banana', 'orange', 'bye', 'banana']
let wordFrecuency = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++
  } else {
    accumulator[currentValue] = 1
  }
}, {})

console.log(wordFrecuency) // {apple: 1, banana: 2, orange: 1, bye: 2}