const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toogleDesktopMenu);
menuHamburger.addEventListener('click', toogleMobilepMenu);

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toogleMobilepMenu(){
    mobileMenu.classList.toggle('inactive');
}