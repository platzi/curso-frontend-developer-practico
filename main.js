// Función que permite abreviar y agilizar el querySelector
const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const burguerMenu = $('.menu');
const mobileMenu = $('.mobile-menu');
const menuCarritoIcon = $('.navbar-shopping-cart');
const aside = $('.product-detail');

menuEmail.addEventListener('click', toggledesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleAside);

const isAsideClose = aside.classList.contains('inactive');
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
const isdesktopMenuClose = desktopMenu.classList.contains('inactive');


function toggledesktopMenu() {
    aside.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
}

function toggleAside() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

    aside.classList.toggle('inactive');
}



// Verificar que el JS este conectado al
console.log('JS Funcionando');