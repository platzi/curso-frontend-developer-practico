const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartButton = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuButton.addEventListener('click', toggleMobileMenu);
shoppingCartButton.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  shoppingCart.classList.add('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  shoppingCart.classList.add('inactive');
}

function toggleShoppingCart() {
  shoppingCart.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}