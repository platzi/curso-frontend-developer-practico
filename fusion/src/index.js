const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamburger = document.querySelector('.hamburger');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.shopping-cart-container');


const toggleDesktopMenu = () => desktopMenu.classList.toggle('toggle');
const toggleMobileMenu = () => mobileMenu.classList.toggle('mobile-menu-toggle');
const toggleShoppingCart = () => shoppingCart.classList.toggle('toggle-shopping-cart');

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShoppingCart);

window.addEventListener("click",  ({ target }) => {
  if(desktopMenu.classList.contains('toggle') && target != desktopMenu && target != navbarEmail) {
    toggleDesktopMenu();
  }
});