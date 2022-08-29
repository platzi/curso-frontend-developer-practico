const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleMenuDesktop);
menuHamIcon.addEventListener('click', toggleMenuMobile);

function toggleMenuDesktop(event){
  desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobile(event){
  mobileMenu.classList.toggle('inactive');
}

