const email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const 

email.addEventListener('click', ToggleDesktopMenu);
burguerIcon.addEventListener('click', ToggleMobileMenu);

function ToggleDesktopMenu(){
  desktopMenu.classList.toggle('ocultoMenuDesktop');
}

function ToggleMobileMenu(){
  mobileMenu.classList.toggle('ocultoMenuMobile');
}