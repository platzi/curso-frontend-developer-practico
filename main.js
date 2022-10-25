const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', menuDesktop);
menuHamIcon.addEventListener('click', menuMobile);

function menuDesktop(){
    desktopMenu.classList.toggle('inactive');
}

function menuMobile(){
    mobileMenu.classList.toggle('inactive');
}