const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu)
aside.addEventListener('click', toggleAside)

function toggleDesktopMenu (){
  desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu (){
  mobileMenu.classList.toggle('inactive');
}

function toggleAside (){
  aside.classList.toggle('inactive');
}
