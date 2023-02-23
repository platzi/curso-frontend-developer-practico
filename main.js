const menuEmail =document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggledesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);

function toggledesktopMenu(){
  desktopMenu.classList.toggle('inactive');
  console.log('click')
}

function toggleMobileMenu(){
  mobileMenu.classList.toggle('inactive')
}