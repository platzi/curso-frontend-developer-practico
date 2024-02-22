// Creación de string
let primeraOpcion = 'Comillas simples'
let segundaOpcion = "Comillas dobles"
let terceraOpcion = `Comillas invertidas`

// 01. Concatenación: Opción +
let direccion = 'Calle viva 123'
let ciudad = 'Sprinfield'
let direccionCompleta = 'Mi direccion es ' + direccion + ciudad
console.log(direccionCompleta)

let direccionCompletaConEspacio = 'Mi direccion es ' + direccion + ' ' + ciudad
console.log(direccionCompletaConEspacio)

//02. Concatenación: templete literals
let nombre = 'Cristian'
let pais = 'Argentina'

let presentacion = `Mi nombre es ${nombre} y soy de ${pais}`
console.log(presentacion)

//03. Concatenación: join()
let primeraParte = 'Me encanta'
let segundaParte = 'la gente de'
let terceraParte = 'Inglaterra'
let pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

//04. Concatenación: concat()
let hobbie1 = 'Leer'
let hobbie2 = 'Bicicleta'
let hobbie3 = 'Estudiar'
const hobbies = 'Mis hobies son: '.concat(hobbie1, ', ', hobbie2, ' y ', hobbie3, '.')
console.log(hobbies);

//Caracteres de escape

// 1. Escape alternativo
let escapeAlternativo = "I'm software Enginner"

// 2. Barra invertida
let escapeBarraInvertida = 'I\'m software Enginner'

// 3. Template literals
let escapeComillaInvertida = `I'm software Enginner`

// Escritura de string largos
/*
En el vasto mar de código, navegamos,
Bugs y errores, valientemente enfrentamos.
Con cada línea, un nuevo amanecer,
En el mundo de la programación, siempre hay algo que aprender. 
*/

let poema1 = 'En el vasto mar de código, navegamos,\n' +
  'Bugs y errores, valientemente enfrentamos.\n' +
  'Con cada línea, un nuevo amanecer,\n' +
  'En el mundo de la programación, siempre hay algo que aprender.'

console.log(poema1);

let poema2 = 'En el vasto mar de código, navegamos,\n\
              Bugs y errores, valientemente enfrentamos.\n\
              Con cada línea, un nuevo amanecer,\n\
              En el mundo de la programación, siempre hay algo que aprender.'

console.log(poema2);

let poema3 = `En el vasto mar de código, navegamos,
              Bugs y errores, valientemente enfrentamos.
              Con cada línea, un nuevo amanecer,
              En el mundo de la programación, siempre hay algo que aprender.`

console.log(poema3);
