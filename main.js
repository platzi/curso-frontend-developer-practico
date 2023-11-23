const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleMenuCarrito);

function toggleDesktopMenu(){
    menuCarrito.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    menuCarrito.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleMenuCarrito(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    menuCarrito.classList.toggle('inactive');
}