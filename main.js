//Para dar click al menu desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//Para dar click al menu hamburguesa
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//los eventos que vamos a escuchar
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

//funciones de los eventos
function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}