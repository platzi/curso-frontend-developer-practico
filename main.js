// Variables
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');
const buttonCartShopping = document.querySelector('.navbar-shopping-cart');
const cartShopping = document.querySelector('.product-detail');

// Funciones
function closeCartShopping () {
    if (cartShopping.classList.contains('product-detail--open')) { 
        cartShopping.classList.toggle('product-detail--open');
    }
}
function openAndCloseMenu () {
    desktopMenu.classList.toggle('desktop-menu--open');
    closeCartShopping();
}
function openAndCloseMenuMobile () {
    mobileMenu.classList.toggle('mobile-menu--open');
    closeCartShopping();
}
function openAndCloseCartShopping () {
    cartShopping.classList.toggle('product-detail--open');

    if (desktopMenu.classList.contains('desktop-menu--open')) { 
        desktopMenu.classList.toggle('desktop-menu--open');
    } else if (mobileMenu.classList.contains('mobile-menu--open')) {
        mobileMenu.classList.toggle('mobile-menu--open');
    }
}


// Ejecuciones
navbarEmail.addEventListener('click', openAndCloseMenu);
menu.addEventListener('click', openAndCloseMenuMobile);
buttonCartShopping.addEventListener('click', openAndCloseCartShopping);