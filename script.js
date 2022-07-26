
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileIconMenu = document.querySelector('.menu');
const mainMenuMobile = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', showDesktopMenu);
mobileIconMenu.addEventListener('click', showMobileMenu);

function showDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
};

function showMobileMenu(){
  mainMenuMobile.classList.toggle('inactive');
};
 








