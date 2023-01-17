const menuEmail     = document.querySelector('.navbar-email');
const imgMenu       = document.querySelector('.menu');
const desktopMenu   = document.querySelector('.desktop-menu');
const mobileMenu    = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
imgMenu.addEventListener('click', toggleImgMenu );

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
};

function toggleImgMenu(){
    mobileMenu.classList.toggle('inactive');
};