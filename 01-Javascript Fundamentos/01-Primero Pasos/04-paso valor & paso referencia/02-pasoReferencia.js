// Tipo de dato complejo - Paso por referencia

let frutas = {
  naranja: '🍊'
}

let vegetales = frutas
vegetales.naranja = '🥦'
console.log(frutas);

let ropa = {
  blusa: '👕'
}

ropa.pantalon = '👖'
console.log(ropa);

// Garbage collection -> Pisa lo anterior y lo reemplaza por el nuevo

// ---------------



// ---------------

function modificarObjeto(objeto) {
  objeto.nombre = 'Nuevo nombre'
}

const miObjeto = { nombre: 'Antiguo nombre' }
console.log('Antes de la función:', miObjeto.nombre);

modificarObjeto(miObjeto)
console.log('Después de la función', miObjeto.nombre);