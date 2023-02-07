const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const asideProduct = document.querySelector('.product-detail');


menuIcon.addEventListener('click', toggleMobileMenu);

shoppingCart.addEventListener('click', toggleProducts);

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

function toggleProducts(){
    asideProduct.classList.toggle('inactive');
}

