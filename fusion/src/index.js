const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamburger = document.querySelector('.hamburger');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.shopping-cart-container');


const toggleDesktopMenu = () => {
  const isCartOpen = shoppingCart.classList.contains('toggle-shopping-cart');
  if(isCartOpen) {
    shoppingCart.classList.remove('toggle-shopping-cart');
  }

  desktopMenu.classList.toggle('desktop-menu-toggle');
}

const toggleMobileMenu = () => {
  const isCartOpen = shoppingCart.classList.contains('toggle-shopping-cart');
  if(isCartOpen) {
    shoppingCart.classList.remove('toggle-shopping-cart');
  }

  mobileMenu.classList.toggle('mobile-menu-toggle');
}

const toggleShoppingCart = () => {
  const isMobileMenuOpen = mobileMenu.classList.contains('mobile-menu-toggle'); 
  const isDesktopMenuOpen = desktopMenu.classList.contains('desktop-menu-toggle'); 
  
  isMobileMenuOpen && toggleMobileMenu();
  isDesktopMenuOpen && toggleDesktopMenu();
  
  shoppingCart.classList.toggle('toggle-shopping-cart');
};

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShoppingCart);