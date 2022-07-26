const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart')
const cartMenu = document.querySelector('.product-detail')


navbarEmail.addEventListener('click', showDesktopMenu);
burguerMenu.addEventListener('click', showMobileMenu);
cartIcon.addEventListener('click', showCartMenu)

function showDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    cartMenu.classList.add('inactive')
};

function showMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    cartMenu.classList.add('inactive')
};

function showCartMenu() {
    cartMenu.classList.toggle('inactive')
    mobileMenu.classList.add('inactive');
}