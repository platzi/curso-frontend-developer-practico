const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenu = document.querySelector('#burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
});

burgerMenu.addEventListener('click', () => {
    productDetail.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
});

menuCart.addEventListener('click', () => {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.toggle('inactive');
});