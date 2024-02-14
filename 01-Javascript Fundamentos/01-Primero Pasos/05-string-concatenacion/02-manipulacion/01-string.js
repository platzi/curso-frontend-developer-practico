// String Primitivos

let stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo) // string

const stringPrimitivoTambien = String('Soy un string primitivo también')
console.log(typeof stringPrimitivoTambien) // string

// String objeto

let stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto) // object

// Acceder a caracteres

let saludos = 'Hola. ¿Cómo estás?'
console.log(saludos[1]) // 0
console.log(saludos.charAt(1)) // 0
console.log(saludos.indexOf('o')) // 1
console.log(saludos.indexOf('Cómo')) // 7
console.log(saludos.lastIndexOf('o')) // 10
console.log(saludos.slice(3, 5)) // a.
console.log(saludos.length) // 18
console.log(saludos.toLocaleLowerCase()) // hola. ¿cómo estás?
console.log(saludos.toLocaleUpperCase()) // HOLA. ¿CÓMO ESTÁS?

let saludoDividido = saludos.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])

let saludosConEspacios = ' Hola mundo '
let saludosSinEspacios = saludosConEspacios.trim()
console.log(saludosSinEspacios); // 'Hola mundo'

let saludoOriginal = 'Hola, soy Cristian'
let nuevoSaludo = saludoOriginal.replace('Hola', 'Buenas tardes')
console.log(nuevoSaludo)

let miPais = 'Argentina'
let miPaisRepeat = miPais.repeat(3)
console.log(miPaisRepeat) //ArgentinaArgentinaArgentina