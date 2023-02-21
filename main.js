const $ = (selector) => document.querySelector(selector);

const desktopMenu = $('.desktop-menu')
const menuEmail =$('.navbar-email');
const burguerMenu =$('.menu');
const mobileMenu =$('.mobile-menu');
const menuCart =$('.navbar-shopping-cart');
const productNav =$('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobilepMenu);
menuCart.addEventListener('click', toggleproductNav);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    productNav.classList.add('inactive');
}

function toggleMobilepMenu() {
    mobileMenu.classList.toggle('inactive');
    productNav.classList.add('inactive');
}

function toggleproductNav() {
    productNav.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

console.log('JS JALA');
