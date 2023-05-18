const menuEmail = document.querySelector('.navbar-email');
const menuBurguerIcon = document.querySelector('.menu');
const menuShopCart = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopCart = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguerIcon.addEventListener('click', toggleMobileMenu);
menuShopCart.addEventListener('click', toggleShopCartMenu);

function toggleDesktopMenu() {
    const isShopCartClosed = shopCart.classList.contains('inactive');

    if (!isShopCartClosed) {
        shopCart.classList.add('inactive');
    } 

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShopCartClosed = shopCart.classList.contains('inactive');

    if (!isShopCartClosed) {
        shopCart.classList.add('inactive');
    } 

    mobileMenu.classList.toggle('inactive');
}

function toggleShopCartMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    shopCart.classList.toggle('inactive');
}