const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const asideCarrito = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleMenuCarrrito);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  asideCarrito.classList.add('inactive');
};

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  asideCarrito.classList.add('inactive');
};

function toggleMenuCarrrito() {
  asideCarrito.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}