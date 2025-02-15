/* Mandar a llamar una variable antes de iniciarla con VAR, 
hace que muestre en este ejemplo hola undefined. 
JavaScript con var no nos aparece un error. Hace que la variable
suba por arriba del console.log() y coloque undefined */

// var nombre;  // undefined;
console.log('hola ' + nombre); // hola undefined
var nombre = 'Cristian';

console.log(userName);
let userName = 'ReveLion';

//////////////////////////////////

/* Con las funciones pasa lo mismo, solo que JavaScript eleva todo el bloque
de la función hacia arriba del llamado y se ejecuta sin problemas */
saludar();

function saludar() {
    console.log('hola, buenas tardes');
}
class Autos {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    mostrarInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Precio: ${this.precio}`);
    }
}

let peugeot = new Autos('Peugeot', 206, 25000);
peugeot.mostrarInfo();