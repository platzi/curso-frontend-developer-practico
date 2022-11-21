const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    const isCartMenuClosed = menuCart.classList.contains('inactive');

    if (!isCartMenuClosed) {
        menuCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

const burgerMenu = document.querySelector('#burgerMenu');
const mobileMenu = document.querySelector('.mobile-menu');

burgerMenu.addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu() {
    const isCartMenuClosed = menuCart.classList.contains('inactive');

    if (!isCartMenuClosed) {
        menuCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

const shoppingCart = document.querySelector('.navbar-shopping-cart');
const menuCart = document.querySelector('.product-detail');

shoppingCart.addEventListener('click', toggleCartMenu);

function toggleCartMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    menuCart.classList.toggle('inactive');
}
