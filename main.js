const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const mobileIconMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileIconMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    DesktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive');
}