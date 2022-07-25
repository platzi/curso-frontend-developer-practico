const navbarMail = document.querySelector('.navbar-email');
const burgerIcon = document.querySelector('.menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideDetails = document.querySelector('.product-detail');

navbarMail.addEventListener('click', toggleDesktopMenu);
burgerIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleAsideDetails);

function toggleDesktopMenu() {
    asideDetails.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    desktopMenu.classList.add('inactive');
    asideDetails.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleAsideDetails() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    asideDetails.classList.toggle('inactive');
}