// codigo js para mostrar y deshacer el menu cuando el usuario de un click
const menuEmail = document.querySelector('.navbar-email');
// este es el menu para desktop
const desktopMenu = document.querySelector('.desktop-menu');
// este es el menu icono para modile
const menuHamIcon = document.querySelector('.menu');
// y esta es la clase mobiñe menu su contenido
const mobileMenu = document.querySelector('.mobile-menu');

// este es el menu para desktop
menuEmail.addEventListener('click', toggleDesktopMenu);
// este es el menu para mobile
menuHamIcon.addEventListener('click', toggleMobileMenu);

// function para hacer que aparecer o desaparecer el menú principal cunando el usuario de un click
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

// esta es la funcion del el icono del menu para mobile
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
