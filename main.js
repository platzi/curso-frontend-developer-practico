const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
  console.log('click');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  console.log('click');
  aside.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  console.log('click');
  mobileMenu.classList.add('inactive');
  aside.classList.toggle('inactive');
}