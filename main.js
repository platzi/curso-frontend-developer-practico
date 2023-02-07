const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuBurger = document.querySelector('.menu');

menuEmail.addEventListener('click' , toggleDesktopMenu);

 function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
 }
 
 menuBurger.addEventListener('click' , toggleMobileMenu);

 function toggleMobileMenu() {
    menuMobile.classList.toggle('inactive');
 }