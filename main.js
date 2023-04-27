// My navDesktop desplegable
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

// My burgerMenu desplegable
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

burgerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

// My car desplegable
const carritoMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

carritoMenu.addEventListener('click', toogleCarritoAside);

function toogleCarritoAside() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}