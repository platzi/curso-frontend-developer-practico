const menuEmail = document.querySelector('.navbar-email');

const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const menuCarritoIcon = document.querySelector('.navbar-shoping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', togglecarritoMenu);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}

function togglecarritoMenu() {
    aside.classList.toggle('inactive')
}