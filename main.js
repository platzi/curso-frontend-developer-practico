// toogle = intercambiar

const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const hamburguerIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);
hamburguerIconMenu.addEventListener('click', toogleMobileMenu);

function toogleDesktopMenu() {
    desktopmenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}