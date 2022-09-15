// codigo js para mostrar y deshacer el menu cuando el usuario de un click
const menuEmail = document.querySelector('.navbar-email');
// este es el menu
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

// function para hacer que aparecer o desaparecer el menú principal cunando el usuario de un click
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}