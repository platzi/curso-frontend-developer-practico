const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cartDetail = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toogleDesktopMenu);
menuHamburger.addEventListener('click', toogleMobilepMenu);
cartIcon.addEventListener('click', toogleCartDetail);

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    cartDetail.classList.add('inactive');
}

function toogleMobilepMenu(){
    mobileMenu.classList.toggle('inactive');
    cartDetail.classList.add('inactive');
}

function toogleCartDetail(){
    cartDetail.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}