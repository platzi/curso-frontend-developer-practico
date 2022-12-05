//Agregando quitar y poner Display: none para poner y quitar el Menu Desktop

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive')
}


//Agregando quitar y poner Display: none para poner y quitar el Menu Mobile
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuHamIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive')
}