const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  aside.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
};
function toggleMobileMenu() {
  aside.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
  // if (!aside.classList.contains('inactive')) {
  //   aside.classList.add('inactive')
  // }
};
function toggleCarritoAside() {
  // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  // if (!isMobileMenuClosed) {
  //   mobileMenu.classList.add('inactive')
  // }
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  aside.classList.toggle('inactive');
};