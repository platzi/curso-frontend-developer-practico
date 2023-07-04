const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {

    // función classList.toggle () para agregar o eliminar la clase 'active' en el elemento desktopMenu
    desktopMenu.classList.toggle('active');



}