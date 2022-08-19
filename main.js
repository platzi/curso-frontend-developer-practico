const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const carrito = document.querySelector ('.navbar-shopping-cart');
const aside = document.querySelector ('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carrito.addEventListener('click', togglecarrito);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    } 
    desktopMenu.classList.toggle('inactive');
};
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    
};

function togglecarrito() {
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClosed = desktopMenu.classList.contains('inactive');
if (!isMenuMobileClosed) {
    mobileMenu.classList.add('inactive');
} if (!isMenuDesktopClosed) {
    desktopMenu.classList.add('inactive');
}
    aside.classList.toggle('inactive');
}


