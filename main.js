let menuEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
let menuIconH = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuIconH.addEventListener('click',toggleMobilepMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu(){
    mobileMenu.classList.toggle('inactive');
}