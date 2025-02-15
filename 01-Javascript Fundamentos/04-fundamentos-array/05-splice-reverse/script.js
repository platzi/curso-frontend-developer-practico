// SPLICE
let vegetales = ['lechuga', 'tomate', 'brocoli', 'rucula']
let removerVegetales = vegetales.splice(2, 1, 'calabaza', 'zanahoria')

console.log(vegetales)
console.log(removerVegetales)

// REVERSE
let numbers = [1, 2, 3, 4, 5]
console.log(numbers)

let reverseNumbers = numbers.reverse()
console.log(reverseNumbers)

// SORT WITH NUMBERS
let unsortedNumbers1 = [4, 18, 1, 62, 34]
console.log(unsortedNumbers1)

let unicodeSortedNumbers = unsortedNumbers1.sort()
console.log(unicodeSortedNumbers)

let unsortedNumbers2 = [4, 18, 1, 62, 34]
console.log(unsortedNumbers2)

let sortedNumbers = unsortedNumbers2.sort((a, b) => a - b)
console.log(sortedNumbers)

// SORT WITH STRING - UTF-16
let cities = ['Los Angeles', 'Londres', 'Manchester', 'Madrid', 'Filadelfia']
console.log(cities)

let sortCities = cities.sort()
console.log(sortCities)

// FILL
let ages = [7, 1, 15, 18, 32, 43, 65, 80]
console.log(ages.fill(2, 2, 4))
console.log(ages.fill(1, 2))
console.log(ages.fill(32))