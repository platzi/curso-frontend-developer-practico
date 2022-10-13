/* Para que el menu aparezca y desaparezca cuando se la da click */

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive'); 
  /* cada vez que le den click a ese elemento de email en el menu,
  se va a ejecutar esta funcion. */
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}