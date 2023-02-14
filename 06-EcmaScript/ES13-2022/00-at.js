const array = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
console.log(array[array.length - 1]);

// Esto 👆 es reemplazado por esto 👇

console.log(array.at(-1));

/*
Muchas veces no sabes la longitud de una array ya que puede contener
cientos de elementos, inclusive miles. Con el método 'at' viene a sustituir
el '.lenght'
*/