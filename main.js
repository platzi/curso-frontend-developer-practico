
const email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

//Mobile constantes

const menuBurger =document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//Mobile menu events

menuBurger.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu (){

    mobileMenu.classList.toggle ('inactive');
}



//Desktop menu events
email.addEventListener('click',toggleMenu);

function toggleMenu(){

   // desktopMenu.classList.add('inactive');
   // desktopMenu.classList.remove('inactive');

    desktopMenu.classList.toggle('inactive') ;


}