const navMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const iconMenu = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')

navMenu.addEventListener('click', toggleMenuDesktop);

function toggleMenuDesktop() {
    desktopMenu.classList.toggle('inactive') 
} 

iconMenu.addEventListener('click', toggleIconMenu);

function toggleIconMenu() {
    menuMobile.classList.toggle('inactive') 
} 