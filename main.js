const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);
btnBurger.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}