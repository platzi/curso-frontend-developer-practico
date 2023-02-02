const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const menuHamIcon = $('.menu');
const mobilemenu=$('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
} 

function toggleMobileMenu(){
    mobilemenu.classList.toggle('inactive')
} 