const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',ToggleDesktopMenu);
menuHamIcon.addEventListener('click',ToggleMobileMenu);

function ToggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function ToggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}