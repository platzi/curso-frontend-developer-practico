const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBurger = document.querySelector('.menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');

menuEmail.addEventListener('click', abrirMenu);
function abrirMenu() {
    desktopMenu.classList.toggle('inactive');
    if (!menuCarrito.classList.contains('inactive')) {
        menuCarrito.classList.toggle('inactive');
    }
}

menuBurger.addEventListener('click', abrirMenuMobile);
function abrirMenuMobile() {
    mobileMenu.classList.toggle('inactive');
    if (!menuCarrito.classList.contains('inactive')) {
        menuCarrito.classList.toggle('inactive');
    }
}

carrito.addEventListener('click', abrirDetalle);
function abrirDetalle() {
    menuCarrito.classList.toggle('inactive');
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive');
    }
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
    }
}