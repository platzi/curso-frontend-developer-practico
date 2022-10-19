const menuEmail = document.querySelector('.navbar-email');
//Elemento al que hago click para que aparezca o desaparezca el menu
const desktopMenu = document.querySelector('.desktop-menu');
//Menu que se despliega

const burgueMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//Aqui se seleccionan las clases que quiera usar para poder manipular el menu

menuEmail.addEventListener('click', toggleDesktopMenu);
burgueMenu.addEventListener('click', toggleMobileMenu);
//Cuando se le añade un addEventListener a alguna variable, se pone primero el evento que disparara 
//y luego la funcion que se disparara cuando se cumpla ese evento... En este caso 'click'

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
//El classList es un metodo que sirve para manipular clases. Se pueden agregar, borrar o, en este caso, 
//hacer como una especie de disparador para que se aparezca y desaparezca el menu
