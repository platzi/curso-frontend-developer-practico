/*Para seleccionar la clase con document.querySelector se utiliza el punto(.)*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopmenu);

function toggleDesktopmenu() {
    // si inactive está presente la elimina, de lo contrario la añade
    desktopMenu.classList.toggle('inactive')
}