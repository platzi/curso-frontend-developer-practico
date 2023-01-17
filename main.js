const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toogleDesktopMenu);
burgerMenu.addEventListener('click', toogleBurgerMenu);

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toogleBurgerMenu() {
    mobileMenu.classList.toggle('inactive');
}