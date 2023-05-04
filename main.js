const clickMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamburguesa = document.querySelector('.menu');

clickMail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toogleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}