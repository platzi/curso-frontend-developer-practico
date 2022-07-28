//Selectors

const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const mobileBurger = document.querySelector('.menu');
const showCartBtn = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.product-detail');
const cartArrow = document.querySelector('.cart-arrow');

//Event listeners
mobileBurger.addEventListener('click', () => {
  menuMobile.classList.toggle('slide-right');
  shoppingCart.classList.remove('slide-left');
});

navBarEmail.addEventListener('click', () => {
  desktopMenu.classList.toggle('inactive');
  shoppingCart.classList.remove('slide-left');
});

showCartBtn.addEventListener('click', () => {
shoppingCart.classList.toggle('slide-left');
menuMobile.classList.remove('slide-right');
desktopMenu.classList.add('inactive');
});

cartArrow.addEventListener('click', () => shoppingCart.classList.remove('slide-left'))