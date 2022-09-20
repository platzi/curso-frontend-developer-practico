const menuEmail = document.querySelector('.navbar-right');
const DesktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    console.log('Click');
    DesktopMenu.classList.toggle('incative');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('incative');
}