const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//Aqui se seleccionan las clases que quiera usar para poder manipular el menu

menuEmail.addEventListener('click', toggleDesktopMenu);
//Cuando se le añade un addEventListener a alguna variable, se pone primero el evento que disparara 
//y luego la funcion que se disparara cuando se cumpla ese evento... En este caso 'click'

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
//El classList es un metodo que sirve para manipular clases. Se pueden agregar, borrar o, en este caso, 
//hacer como una especie de disparador para que se aparezca y desaparezca el menu
