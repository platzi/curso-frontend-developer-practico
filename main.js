// Variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const imagenMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
imagenMenu.addEventListener('click', toggleMobileMenu);

// Funciones
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('INACTIVE')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('INACTIVE')
}