const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');

function openAndCloseMenu () {
    desktopMenu.classList.toggle('desktop-menu--open');
}

function openAndCloseMenuMobile () {
    mobileMenu.classList.toggle('mobile-menu--open');
}

navbarEmail.addEventListener('click', openAndCloseMenu);

menu.addEventListener('click', openAndCloseMenuMobile);