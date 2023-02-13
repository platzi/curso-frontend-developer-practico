const menuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuMail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {    
    desktopMenu.classList.toggle('inactive');
}

menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {    
    mobileMenu.classList.toggle('inactive');
}