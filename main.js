const menuEmail = document.querySelector('.navbar-email');
const menu = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}