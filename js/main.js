const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu-burguer');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCar = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleBurguerMenu);
shoppingCar.addEventListener('click', toggleShoppingCar);

function toggleDesktopMenu() {
    if (productDetail.classList.contains('active')) {
        productDetail.classList.remove('active');
    }
    desktopMenu.classList.toggle('active');
}

function toggleBurguerMenu() {
    if (productDetail.classList.contains('active')) {
        productDetail.classList.remove('active');
    }
    mobileMenu.classList.toggle('active');
}

function toggleShoppingCar() {
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
    if (desktopMenu.classList.contains('active')) {
        desktopMenu.classList.remove('active');
    }
    productDetail.classList.toggle('active');
}