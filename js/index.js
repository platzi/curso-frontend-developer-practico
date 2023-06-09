const menuEnable = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEnable.addEventListener('click',()=>{
  desktopMenu.classList.toggle('inactive');
})

burgerMenu.addEventListener('click',()=>{
  mobileMenu.classList.toggle('inactive');
})