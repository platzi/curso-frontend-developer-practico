const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCart = document.querySelector('.navbar-shopping-cart');
const cartMenu = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMobileMenu);
iconCart.addEventListener('click', toggleCartMenu);


function toggleDesktopMenu() {
    const isCartMenuClosed = cartMenu.classList.contains('inactive');

    if (!isCartMenuClosed) {
        cartMenu.classList.add('inactive');}

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCartMenuClosed = cartMenu.classList.contains('inactive');

    if (!isCartMenuClosed) {
        cartMenu.classList.add('inactive');}

    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');}
    
    cartMenu.classList.toggle('inactive');    
}
