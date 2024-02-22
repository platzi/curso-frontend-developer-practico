// Capacidad que tienen las funcuiones al igual que otros objetos

// 1. Pasar funciones como argumentos -> callback
/*
function a() { }
function b(a) { }
b(a)
*/

// 2. Retornar funciones
/*
function a() {
  function b() { }
  return b
}
*/

// 3. Asignar funciones a variables -> Expresión de función
/*
const a = function () {

}
*/

// 4. Tener propiedades y métodos
function imprimirInformacion() {
  console.log(`Nombre: ${this.nombre}`);
  console.log(`Edad: ${this.edad}`);
  console.log(`Profesión: ${this.profesion}`);
}

// Objeto 1
const persona1 = {
  nombre: "Juan",
  edad: 30,
  profesion: "Ingeniero",
};

// Objeto 2
const persona2 = {
  nombre: "Ana",
  edad: 25,
  profesion: "Doctora",
};

// Utilizar la función imprimirInformacion con diferentes objetos
imprimirInformacion.call(persona1);
console.log("--------------------");
imprimirInformacion.call(persona2);

/* Un ejemplo más práctico del uso del método `call` para cambiar
el contexto de una función y utilizar propiedades del objeto proporcionado */

// Anidar funciones -> Nested functions
/* 
function a() {
  function b() {
    function c() {

    }
    c()
  }
  b()
}
a()
*/

// ¿Es posible almacenar funciones en objetos? -> SI
const rocket = {
  name: 'Falcon 9',
  launchMessenge: function launchMessenge() {
    console.log('🚀');
  }
}

rocket.launchMessenge()

