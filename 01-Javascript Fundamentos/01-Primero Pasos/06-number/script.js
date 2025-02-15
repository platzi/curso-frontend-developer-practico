// 1. Tipo entero y decimal, aunque se escribe diferente por debajo siguen siendo el mismo tipo de dato.
const entero = 42
const decimal = 3.14

console.log(typeof entero, typeof decimal)

//2. Notación científica
const cientifico = 5e3

//3. Infinitos y NaN
const infinito = Infinity
const NoEsUnNumero = NaN

//Operaciones aritméticas

//1. Suma, resta, multiplicación y división
const suma = 3 + 4
const resta = 4 - 4
const multiplicacion = 4 * 7
const division = 16 / 2

//2. Módulo y exponenciación
const modulo = 15 % 8 //Sirve para saber si un número es múltiplo de otro.
const exponenciacion = 2 ** 3 //Potencia

//Tiene ciertos problemas de Precisión.
const resultado = 0.1 + 0.2
console.log(resultado)

//Para solucionar precisión
console.log(resultado.toFixed(1))

//Por su problema de precisión no es recomendable para comparar, porque aunque se compare con el valor que debería dar, genera un resultado equivocado.
console.log(resultado === 0.3)

//3. Operaciones avanzadas

//Raíz cuadrada
const raizCuadrada = Math.sqrt(16)
console.log(raizCuadrada)

//Valor absoluto
const valorAbsoluto = Math.abs(-7)
console.log(valorAbsoluto)

//Número random (aleatorio)
const aleatorio = Math.random()
console.log(aleatorio)