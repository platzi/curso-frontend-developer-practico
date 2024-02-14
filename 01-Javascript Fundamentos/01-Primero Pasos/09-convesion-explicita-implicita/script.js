// Explicit Type Casting
let string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

let stringDecimal = '3.142'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

let binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

// Implicit Type Casting
let suma = '5' + 3
console.log(suma)

let sumaWithBoolean = '3' + true
console.log(sumaWithBoolean)

let sumaWithNumber = 2 + true
console.log(sumaWithNumber)

let stringValue = '10'
let numberValue = 10
let booleanValue = true

console.log('------------------------------------');

// Combinaciones con stringValue
console.log(stringValue + stringValue); // CONCATENAR
console.log(stringValue + numberValue); // CONCATENAR
console.log(stringValue + booleanValue); // CONCATENAR

// Combinaciones con numberValue
console.log(numberValue + stringValue); // CONCATENAR
console.log(numberValue + numberValue); // SUMAR
console.log(numberValue + booleanValue); // SUMAR

// Combinaciones con booleanValue
console.log(booleanValue + stringValue); // CONCATENAR
console.log(booleanValue + numberValue); // SUMAR
console.log(booleanValue + booleanValue); // SUMAR