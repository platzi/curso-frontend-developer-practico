const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIconAside = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIconMenu.addEventListener('click', toggleMobileMenu);
cartIconAside.addEventListener('click', toggleMyOrderAside);


function toggleDesktopMenu () {
    asideProductDetail.classList.add('inactive')
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    asideProductDetail.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

function toggleMyOrderAside () {
    mobileMenu.classList.add('inactive')
    asideProductDetail.classList.toggle('inactive')
}