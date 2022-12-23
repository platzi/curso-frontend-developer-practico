const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu')
const menuBurger=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',menuToggle);
function menuToggle(){
    desktopMenu.classList.toggle('inactive')
}
menuBurger.addEventListener('click',menuToggleMobile);
function menuToggleMobile(){
    mobileMenu.classList.toggle('inactive');
}