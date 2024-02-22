// Tipo de datos primitivos - Inmutables
let numero = 38
numero = numero + 3
console.log(numero)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

// Tipo de datos complejo - Mutables
let usuario = { nombre: 'Cristian', edad: 38 }
usuario.nombre = 'Leonardo'
console.log(usuario)

let frutas = ['manzana', 'kiwi']
frutas[0] = 'uvas'
console.log(frutas)

function dameNombre(objeto) {
  objeto.nombre = 'Javier'
}

let persona = { nombre: 'Damian' }
dameNombre(persona)

console.log(persona);