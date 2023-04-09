const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu-ham-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const asideShoppingCart = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu); //toggle = palanca
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleAsideShoppingCart);

function toggleDesktopMenu() {
    const isAsideShoppingCartClosed = asideShoppingCart.classList.contains('inactive');
    if (!isAsideShoppingCartClosed) {
        asideShoppingCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideShoppingCartClosed = asideShoppingCart.classList.contains('inactive');
    if (!isAsideShoppingCartClosed) {
        asideShoppingCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleAsideShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    
    asideShoppingCart.classList.toggle('inactive');
}