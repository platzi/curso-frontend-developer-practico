const menuEmail = document.querySelector('.navbar-email');
const miniMenu = document.querySelector('.desktop-menu');

const menuCarritoeIcon = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('.product-detail');

const menuMobileIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleMiniMenu);
menuMobileIcon.addEventListener('click', toggleMobileMenu);
menuCarritoeIcon.addEventListener('click', toggleCarritoMenu);

function toggleMiniMenu() {
    
    miniMenu.classList.toggle('inactive');
    carritoMenu.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    carritoMenu.classList.add('inactive');
}

function toggleCarritoMenu() {
    mobileMenu.classList.add('inactive');
    miniMenu.classList.add('inactive');
    carritoMenu.classList.toggle('inactive');
    
}