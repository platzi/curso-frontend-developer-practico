const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const navShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', modifyDesktopMenu);
iconMenu.addEventListener('click', modifyMobileMenu);
navShoppingCart.addEventListener('click', modifyProductDetail);

function modifyDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}

function modifyMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}

function modifyProductDetail() {
    productDetail.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}