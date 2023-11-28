const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobileIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
menuMobileIcon.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive');
}
