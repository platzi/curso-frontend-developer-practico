// ------------------------Variables-----------------------------
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

// -------------------Llamando Eventos-------------------------------
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);


// -----------------------Funciones----------------------------------
function toggleDesktopMenu() {

  desktopMenu.classList.toggle('inactive');
  console.log("Click menu desktop");
}

function toggleMobileMenu() {
  

}