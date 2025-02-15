let temperaturesInFahrenheit = [32, 68, 95, 104, 232]
let temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5 / 9) * (fahrenheit - 32))

console.log('temperatures In Fahrenheit', temperaturesInCelsius);
console.log('temperatures In Celsius', temperaturesInFahrenheit);

// Exercise: sum of elements in an Array

let numbers = [1, 2, 3, 4, 5]
let sum = 0

numbers.forEach(number => {
  sum += number // sum = sum + number
})

console.log('Numbers: ', numbers);
console.log('Sum of Numbers: ', sum);