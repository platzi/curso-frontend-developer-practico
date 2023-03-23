const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuHamMenu=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamMenu.addEventListener('click',toggleMobileManu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileManu() {
    mobileMenu.classList.toggle('inactive');
}