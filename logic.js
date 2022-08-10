const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingIcon = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingIcon.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  if (!asideProductDetail.classList.contains('inactive')) {
    asideProductDetail.classList.add('inactive');
  }
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  if (!asideProductDetail.classList.contains('inactive')) {
    asideProductDetail.classList.add('inactive');
  }
}

function toggleProductDetail() {
  asideProductDetail.classList.toggle('inactive');
  if (!mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.add('inactive');
  }
}