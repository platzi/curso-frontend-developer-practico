const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBars = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const menuCart = document.querySelector(".product-detail");

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBars.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu() {
    const isAsideClosed = menuCart.classList.contains('inactive');

    if(!isAsideClosed){
        menuCart.classList.add('inactive');
    };

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isAsideClosed = menuCart.classList.contains('inactive');

    //si esta abierto el carrito, lo cierra
    if(!isAsideClosed){
        menuCart.classList.add('inactive');
    };
    menuMobile.classList.toggle('inactive');
};

function toggleCartMenu() {
    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    //si esta abierto el menu mobile o desktop, lo cierra
    if(!isMobileMenuClosed){
        menuMobile.classList.add('inactive');
    } else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    menuCart.classList.toggle('inactive');
}