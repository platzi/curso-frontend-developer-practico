const numeros = [45, 43, 988, 14, 69, 70, 12, 8, 7897, 1574, 5674, 255, 48, 5687, 221, 478]

// El último elemento no lo toma
console.log(numeros.slice());
console.log(numeros.slice(2));
console.log(numeros.slice(2, 4));
console.log(numeros.slice(1, 6));
console.log(numeros.slice(-2));
console.log(numeros.slice(2, -1));