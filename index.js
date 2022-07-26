const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toogleMenu);
burgerMenu.addEventListener('click', toogleBurgerMenu);

function toogleMenu() {
    desktopMenu.classList.toggle('inactive');
};

function toogleBurgerMenu() {
    mobileMenu.classList.toggle('inactive');
};
