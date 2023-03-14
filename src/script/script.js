const menu = document.querySelector('.menu');

const navbarEmail = document.querySelector('.navbar-email');

const deskTopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');

const iconCart = document.querySelector('.navbar-shopping-cart');

const cartProducts = document.querySelector('.product-detail');

iconCart.addEventListener('click', showCartProducts);
navbarEmail.addEventListener('click', toggleDeskTopMenu);
menu.addEventListener('click', showMobileMenu);

function toggleDeskTopMenu () {
  const isShowCartProductsClosed = cartProducts.classList.contains('inactive');

  if (!isShowCartProductsClosed) {
    cartProducts.classList.add('inactive');
  }

  deskTopMenu.classList.toggle('inactive');
}

function showMobileMenu () {
  const isShowCartProductsClosed = cartProducts.classList.contains('inactive');

  if (!isShowCartProductsClosed) {
    cartProducts.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function showCartProducts () {
  const isToggleDeskTopMenuClosed = deskTopMenu.classList.contains('inactive');
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isToggleDeskTopMenuClosed) {
    deskTopMenu.classList.add('inactive');
  }

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  cartProducts.classList.toggle('inactive');
}
