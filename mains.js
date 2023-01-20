
// Elements
const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

emailMenu.addEventListener('click', toggleMenuDesktop);
burgerMenu.addEventListener('click', toggleBurgerMenu);
cartMenu.addEventListener('click', toggleAside);

function toggleMenuDesktop() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleBurgerMenu(){
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleAside() {
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

}