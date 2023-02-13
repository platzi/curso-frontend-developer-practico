const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const asideCarritoIcon = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoIcon);


function toggleDesktopMenu() {
// const isAsideCarritoIconClosed = asideCarritoIcon.classList.contains('inactive');
  // if (!isAsideCarritoIconClosed) {
  //   asideCarritoIcon.classList.add('inactive');
  // }

  // *** Mejor Solucion ***
  asideCarritoIcon.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  // const isAsideCarritoIconClosed = asideCarritoIcon.classList.contains('inactive');
  // if (!isAsideCarritoIconClosed) {
  //   asideCarritoIcon.classList.add('inactive');
  // }

  // *** Mejor Solucion ***
  asideCarritoIcon.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoIcon() {
  // const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  // if (!isDesktopMenuClosed) {
  //   desktopMenu.classList.add('inactive');
  // }
  // if (!isMobileMenuClosed) {
  //   mobileMenu.classList.add('inactive');
  // }

  // *** Mejor Solucion ***
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  asideCarritoIcon.classList.toggle('inactive');
}