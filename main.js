// mobile desktop
const arrowMenuLeft = document.getElementById('email-arrow-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mailAndArrowMenu = document.querySelector('.navbar-email');

mailAndArrowMenu.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    arrowMenuLeft.classList.toggle('arrow-down');
}

// menu mobile
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuBurger.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}