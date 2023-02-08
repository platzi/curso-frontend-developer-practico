const anotherNumber = 1;
const validate = anotherNumber ?? 5;
console.log(validate);

// 
const numero = null;
const validate2 = numero ?? 16;
console.log(validate2);

/* 
El nullish hace que si la variable que qeuremos validar es nulo,
lo reemplaze por un número default.
*/