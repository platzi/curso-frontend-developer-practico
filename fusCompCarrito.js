/* aqui fusionaremos todos los.html del proyecto de desarrollador frontend para luego trabajarlo en java script y hacerlo un solo proyecto
 */


const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');




menuEmail.addEventListener('click', toggleDesktopMenu);

menuHamIcon.addEventListener('click', ToggleMobilMenu);

function toggleDesktopMenu() {
   
    desktopMenu.classList.toggle('inactive');//quiere decir que el toggle lo activa e inactiva
}

function ToggleMobilMenu() {
   
    mobileMenu.classList.toggle('inactive');//quiere decir que el toggle lo activa e inactiva
}




