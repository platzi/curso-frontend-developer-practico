const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const BurgerMenu = $('.menu')
const mobileMenu = $('.mobile-menu')

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
   
    desktopMenu.classList.toggle('inactive') ;
    
}

BurgerMenu.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
   
    mobileMenu.classList.toggle('inactive') ;
    
}

