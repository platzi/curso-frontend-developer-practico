const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamDesktop = document.querySelector('.menu');
const menuMobil = document.querySelector('.mobile-menu');

navEmail.addEventListener('click',toggleDesktopMenu);
menuHamDesktop.addEventListener('click',toggleMobilMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu(){
    menuMobil.classList.toggle('inactive');
}