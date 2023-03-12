const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  
  const isAsideMenuClose = aside.classList.contains('inactive');

  if (!isAsideMenuClose) {
    aside.classList.add('inactive');
  }
 }

function toggleMobileMenu() {
  const isAsideMenuClose = aside.classList.contains('inactive');

  if (!isAsideMenuClose) {
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside() {
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClose) {
    mobileMenu.classList.add('inactive');
  }
  
  aside.classList.toggle('inactive');

}