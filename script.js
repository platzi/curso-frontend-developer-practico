const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDesktopMenu); // aquí decimos que cuando se de un clic, se ejecute la función toggleDesktopMenu.

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive'); // llamamos a nuestra constante/utilizamos la palabra reservada classList para listar una clase / toggle sirve para intercabiar(poner o quitar la clase) / y dentro de los parentesis ponemos la clase que queremos que se intercambie.
};