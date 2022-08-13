const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', modifyDesktopMenu);
iconMenu.addEventListener('click', modifyMobileMenu);

function modifyDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function modifyMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}