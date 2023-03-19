const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', showDesktopMenu);
menuHamIcon.addEventListener('click', showMobileMenu);

function showDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function showMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}