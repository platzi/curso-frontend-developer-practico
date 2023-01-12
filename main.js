const menuEmail = document.querySelector('.navbar-email');
const menuBurgerIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  aside.classList.add('inactive')
};

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  aside.classList.add('inactive')
};

function toggleCartAside() {
  aside.classList.toggle('inactive');
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
};