// Funciones puras

// Side Effects
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 6. Obtener la hora actual

function sum(a, b) {
  return a + b
}

// Funciones impuras
function sum2(a, b) {
  console.log('A: ' + a)
  return a + b
}

let total = 0
function sumWithSideEffect(a) {
  total += a // Es igual a -> total = total + a
  return total
}

// Funciones puras
function square(x) {
  return x * x
}

function addTen(y) {
  return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)