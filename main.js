const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcom = document.querySelector('.menu-ham-icon');
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcom.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
    console.log('Click Email');
    desktopMenu.classList.toggle('inactive');
}   

function toggleMobileMenu() {
    console.log('Click Mobile Menu');
    mobileMenu.classList.toggle('inactive');
}   

console.log('main.js iniciado en HTML')