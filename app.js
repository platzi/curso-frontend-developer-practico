const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toogleShowDesktopMenu);
menuHamIcon.addEventListener('click', toogleShowMobileMenu);

function toogleShowDesktopMenu(event){
    event.preventDefault();
    desktopMenu.classList.toggle('inactive')
}

function toogleShowMobileMenu(event) {
    event.preventDefault();
    mobileMenu.classList.toggle('inactive');
}