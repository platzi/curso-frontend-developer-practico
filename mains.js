
// Elements
const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')

emailMenu.addEventListener('click', toggleMenuDesktop);
burgerMenu.addEventListener('click', toggleBurgerMenu);

function toggleMenuDesktop() {
    desktopMenu.classList.toggle('inactive');
}

function toggleBurgerMenu(){
    mobileMenu.classList.toggle('inactive');
}