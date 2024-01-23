const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBurger = document.querySelector('.menu');

menuEmail.addEventListener('click', abrirMenu);
function abrirMenu() {
    desktopMenu.classList.toggle('inactive');
}

menuBurger.addEventListener('click', abrirMenuMobile);
function abrirMenuMobile() {
    mobileMenu.classList.toggle('inactive');
}