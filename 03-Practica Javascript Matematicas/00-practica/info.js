// Nombres claves

// console.group('encapsulado') / console.groupEnd('encapsulado')

// Math.sqrt 👉 
//Es la función que retorna la raíz cuadrada de un número

// array.prototype.find() 👉 
/* Al igual que los métodos forEach, map y filter, el método find en JavaScript
es una función que nos permite manipular los elementos de un array. Piensa en estos métodos 
como si fueran una caja con un hueco de entrada y uno de salida. Nosotros introducimos en 
la caja un array o listado de elementos. */

// array.prototype.map() 👉
/* Es un método incorporado en los arreglos, para iterar a través de los elementos dentro de una 
colección de arreglos en JavaScript. Piensa en él, como un bucle para avanzar de un elemento a 
otro en una lista, manteniendo el orden y la posición de cada elemento. */

// array.prototype.reduce() 👉 
/* El método de reducción (reduce) en realidad tiene un nombre bastante explicativo, 
ya que todo lo que hace es tomar un array de elementos y reducirlo a un solo valor. 
Este valor puede ser cualquier cosa, como un número, un objeto o una cadena (string). */

// array.prototype.slice() 👉 
/* El método slice() devuelve una copia de una parte del array dentro de un nuevo array 
empezando por inicio hasta fin (fin no incluido). El array original no se modificará. */

const numeros = [3, 4, 32, 43, 653];
const sliceNumber = numeros.slice(0, 2)
console.log(sliceNumber);

const spliceNumber = numeros.splice(0, 2)
console.log(spliceNumber);



