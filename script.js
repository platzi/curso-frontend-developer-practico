// despliegue de menu email
const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

emailMenu.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

// despliegue menu burger
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

burgerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

// despliegue shopping cart menu
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

shoppingCartMenu.addEventListener('click', toggleShoppingCartAside);

function toggleShoppingCartAside(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}