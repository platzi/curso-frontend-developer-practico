// Null
/*
 Es un valor especial que representa
 la ausencia de valor o la no existencia
 de un objeto. Aquí, la variable snoopy
 se ha asignado el valor null.
*/
let snoopy = null
console.log(snoopy)
console.log(typeof snoopy)


// Undefined
/*
Es un tipo de dato que se asigna a
una variable que ha sido declarada
pero aún no se le ha asignado un valor.
Aquí, la variable name es undefined.
*/
let name
console.log(name)


// Symbol
/*
Es un tipo de dato cuyos valores son
únicos e inmutables. Los símbolos son
útiles para crear propiedades únicas
para los objetos. Aquí, se crean varios símbolos
y se demuestra que cada símbolo es único,
incluso si su descripción es la misma.
*/
let uniqueId = Symbol('id')
let symbol1 = Symbol(1)
let symbol2 = Symbol(1)
console.log(symbol1 === symbol2)

let ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

// BigInt
/*
Es un objeto incorporado que proporciona
una forma de representar números enteros más
grandes que 2^53 - 1, que es el límite superior
para el tipo de datos Number en JavaScript.
Aquí, se crean dos BigInts y se demuestra que
pueden manejar números extremadamente grandes
sin perder precisión.
*/
let bigNumber = 54564568464568896746814356496874874n
console.log(bigNumber)

const numberOfParticlesInTheUniverse = 10n ** 100n; // 10 elevado a 100
console.log(numberOfParticlesInTheUniverse); // Un número extremadamente grande