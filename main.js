const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);  
menuHamIcon.addEventListener('click', toggleMobileMenu); 

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  desktopMenu.classList.add('inactive')
}




