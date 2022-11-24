
//menu desplegable que sale del email (usando una clase de css inactive)
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

iconMenu.addEventListener('click', toggleMobilMenu);

function toggleMobilMenu() {
    mobileMenu.classList.toggle('inactive');
}