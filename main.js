const $ = (selector) => document.querySelector(selector);

const desktopMenu = $('.desktop-menu')
const menuEmail =$('.navbar-email');
const burguerMenu =$('.menu');
const mobileMenu =$('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobilepMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu() {
    mobileMenu.classList.toggle('inactive');
}



console.log('JS JALA');
