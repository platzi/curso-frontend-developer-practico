const menuEmail = document.querySelector('.navbar-email');
const menuHamburguerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  aside.classList.toggle('inactive');
}