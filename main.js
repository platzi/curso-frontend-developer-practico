const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCart = document.querySelector('.navbar-shopping-cart');
const cartProductDetail = document.querySelector('.product-detail');


navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleBurguerMenu);
iconCart.addEventListener('click', toggleCart);

function toggleDesktopMenu() {
    const isCartProductDetailClosed = cartProductDetail.classList.contains('inactive');
    if (!isCartProductDetailClosed) {
        cartProductDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleBurguerMenu() {
    const isCartProductDetailClosed = cartProductDetail.classList.contains('inactive');
    if (!isCartProductDetailClosed) {
        cartProductDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isNavEmailClosed = navEmail.classList.contains('inactive');
    if (!isMobileMenuClosed || !isNavEmailClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    cartProductDetail.classList.toggle('inactive');
}