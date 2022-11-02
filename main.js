const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);

menu.addEventListener('click', toogleMobileMenu);

//Así lo había escrito 
/* function toogleDesktopMenu(){
   if (desktopMenu.classList.contains('inactive')){
    desktopMenu.classList.remove('inactive')
    } else {
    desktopMenu.classList.add('inactive');
   }     
}; */

//Así lo escribió juandc
function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
};
function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
};
