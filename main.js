const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', mostrarMenu);
burgerMenu.addEventListener('click', mostrarMenuMobile);

function mostrarMenu() {
    desktopMenu.classList.toggle('inactive');
}

function mostrarMenuMobile() {
    mobileMenu.classList.toggle('inactive');
}