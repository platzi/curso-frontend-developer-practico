const $ = (element) => document.querySelector(element);
const email = $('.navbar-email');
const desktopMenu= $('.desktop-menu');
const menu = $('.menu');
const mobileMenu = $('.mobile-menu');
const btnCart = $('.navbar-shopping-cart');
const menuCart = $('.product-detail');
console.log({menu});

email.addEventListener('click', toggleDesktop)
menu.addEventListener('click', toggleMenu )
btnCart.addEventListener('click', toggleCart)

function toggleDesktop() {
    let isMenuCartClosed = menuCart.classList.contains('inactive');
    if(!isMenuCartClosed){
        menuCart.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMenu() {
    let isMenuCartClosed = menuCart.classList.contains('inactive');
    if(!isMenuCartClosed){
        menuCart.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('slide-right-menu');
}
function toggleCart() {
    let isMobileMenuClosed = !mobileMenu.classList.contains('slide-right-menu');
    let desktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle('slide-right-menu');
    }
    if(!desktopMenuClosed){
        desktopMenu.classList.toggle('inactive');
    }
    menuCart.classList.toggle('inactive');
}