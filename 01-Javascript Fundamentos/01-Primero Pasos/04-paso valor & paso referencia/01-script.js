// PASO POR VALOR

let x = 1
let y = 'Hola'
let z = null

let a = x
let b = y
let c = z

console.log(x, y, z, a, b, c);

a = 12
b = 'Platzi'
c = undefined

console.log(a, b, c);

// PASO POR REFERENCIA

let frutas = ['manzana']
frutas.push('pera')
console.log(frutas);

let animales = ['🦊']
let copiaAnimales = animales
animales.push('🦁')

console.log(animales, copiaAnimales);

copiaAnimales.push('🐼')

console.log(animales, copiaAnimales);

let estadosDeAnimos = {
  contento: '😂'
}

let copiaEstadoDeAnimos = estadosDeAnimos
copiaEstadoDeAnimos.contento = '😎'
console.log(estadosDeAnimos);