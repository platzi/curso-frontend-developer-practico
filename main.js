const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    // .classList es para ver qué clases tiene el elemento
    // .toggle es para activar o desactivar la clase seleccionada
    desktopMenu.classList.toggle('inactive');
}