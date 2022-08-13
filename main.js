const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', toggleMenuMobile);

function toggleMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobile() {
    mobileMenu.classList.toggle('inactive');
}