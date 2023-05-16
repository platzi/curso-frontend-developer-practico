const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const MenuHamIcon = document.querySelector('.menu');
const MovilMenu = document.querySelector('.mobile-menu');
const ShoppingCart = document.querySelector('.navbar-shopping-cart');
const ProductDetail = document.querySelector('.product-detail');

ShoppingCart.addEventListener('click', toggleProductDetail)
navEmail.addEventListener('click', togglemenu);
MenuHamIcon.addEventListener('click', togglemobilemenu);

function togglemenu() {
    desktopMenu.classList.toggle('inactive')
    if (!ProductDetail.classList.contains('inactive')){
        ProductDetail.classList.add('inactive')
    }
}

function togglemobilemenu() {
    MovilMenu.classList.toggle('inactive')
    if (!ProductDetail.classList.contains('inactive')){
        ProductDetail.classList.add('inactive')
    }
}

function toggleProductDetail() {
    ProductDetail.classList.toggle('inactive')
    if (!MovilMenu.classList.contains('inactive')) {
        MovilMenu.classList.add('inactive')
    }
}