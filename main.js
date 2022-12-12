const navEmail = document.querySelector('.navbar-email');
const navEmailSubMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetail = document.querySelector('.product-detail');
const menuCarrito = document.querySelector('.navbar-shopping-cart');

navEmail.addEventListener('click', toggleDesktopmenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleMenuCarrito);

function toggleDesktopmenu() {
  const isAsideClosed = productDetail.classList.contains('inactive');
  if (!isAsideClosed) {
    productDetail.classList.add('inactive');
  }
  navEmailSubMenu.classList.toggle('inactive')
};
function toggleMobileMenu() {
  const isAsideClosed = productDetail.classList.contains('inactive');
  if (!isAsideClosed) {
    productDetail.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive')
};
function toggleMenuCarrito() {
  const isMobilemenuClosed = mobileMenu.classList.contains('inactive');
  if (!isMobilemenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  productDetail.classList.toggle('inactive')

};