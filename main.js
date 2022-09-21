//Variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//Eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);

//Funciones
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}