const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconoMenuMobil = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const myOrderMenu = document.querySelector('.product-detail');

menuEmail.addEventListener ('click', toggleDesktopMenu);
iconoMenuMobil.addEventListener ('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleMyOrderMenu);

function toggleDesktopMenu() {
    const isMyOrderMenuClosed = myOrderMenu.classList.contains('inactive');
    if (!isMyOrderMenuClosed) {
        myOrderMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
};
function toggleMobileMenu() {
    const isMyOrderMenuClosed = myOrderMenu.classList.contains('inactive');
    if (!isMyOrderMenuClosed) {
        myOrderMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    console.log('Hello')
};
function toggleMyOrderMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains ('inactive');
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    myOrderMenu.classList.toggle('inactive');
};
console.log('I am working');