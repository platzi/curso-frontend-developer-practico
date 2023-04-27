const desktopMenu = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');
const iconBurguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const iconShoppingCart = document.querySelector('.navbar-shopping-cart');

navbarEmail.addEventListener('click', toggleDesktopMenu);
iconBurguerMenu.addEventListener('click', toggleMobileMenu);
iconShoppingCart.addEventListener('click', toggleAside);


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.toggle('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}
function toggleAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.toggle('inactive');
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
    }

    aside.classList.toggle('inactive');
}