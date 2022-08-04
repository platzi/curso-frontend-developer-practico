//Leyendo HTML desde JS:

document.getElementById(); //Funciones que da el navegador
document.querySelector();

//crear variables que representen a los selectores
//Metodos para seleccionar los elementos que estan en HTML
//queryselectorALL; selecciona todos los elementos.

const h1 = document.querySelector('h1'); //funcion que selecciona elementos HTML.
const parrafito= document.querySelector('.parrafito'); //Selecciona un elemento que tiene una clase en HTML
const pid = document.querySelector('#pid');/// selecciona un elemento que tiene un ID en HTML

console.log(
    {
        h1,
        parrafito,
        pid
    }
)

//Escribiendo HTML desde JS:

h1.innerHTML= "Patito <br> lindo" //innerHTML cambia el texto en html, modifica el html que este dentro de la etiqueta
// Ademas se pueden insertar etiquetas HTML como <br>
h1.innerText= "HOLA JEJE" // inserta texto dentro de la etiqueta HTML
h1.getAttribute('pantalla'); // lee el atributo del elemento HTML, ¿Hay algun atributo? -> lo lee.
h1.setAttribute('class' , 'rojo');// se le dice cual es la clase que quiero modificar y el nuevo atributo.
h1.classList.add('rojo'); // Añade la clase al elemento.
h1.classList.remove('rojo'); //elimina la clase del elemento HTML.
h1.classList.toggle('rojo'); // se usa con un evento , lo que hace es poner y quitar la clase.
h1.classList.contains('rojo'); // pregunta si el elemento tiene la clase o 

input.value= '456'; // modifica html desde JS

//crear elemento desde cero

document.createElement('img'); //ayuda a crear el cualquier elemento HTML.

const img= document.createElement('img');
img.setAttribute('src', 'url');
pid.innerText= "";

pid.append(img);//inserta la imagen dentro del pid

//Eventos en JS, Interactuando con los usuarios:
//Hacer la manipulacion del DOM, cuando los usuarios hagan algo, cuando se genere un evento:

const input1= document.getElementById('calculo1')
const input2= document.getElementById('calculo2')
const button= document.getElementById('btnCalcular')
const result = document.getElementById('result');
const form= document.querySelector('#form')

//onchange escucha cada vez que los usuarios escuchan algo.
form.addEventListener('submit', 'calc');

function calc (event){
    event.preventDefault();
    const sumaInputs= input1.value + input2.value;
    result.innerText= sumaInputs;

}
   
