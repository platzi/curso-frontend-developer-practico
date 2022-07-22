const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu)
burgerMenu.addEventListener('click', toggleBurgerMenu)
menuShoppingCart.addEventListener('click', toggleShoppingCart)


function toggleDesktopMenu() {
   const isAsideOpened = !aside.classList.contains('inactive');

   if (isAsideOpened) aside.classList.toggle('inactive');
   desktopMenu.classList.toggle('inactive');
}
function toggleBurgerMenu() {
   const isAsideOpened = !aside.classList.contains('inactive');

   if (isAsideOpened) aside.classList.toggle('inactive');
   mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCart() {
   const isMobileMenuOpened = !mobileMenu.classList.contains('inactive');
   const isDesktopMenuOpened = !desktopMenu.classList.contains('inactive');

   if (isMobileMenuOpened) mobileMenu.classList.toggle('inactive');
   if (isDesktopMenuOpened) desktopMenu.classList.toggle('inactive');
   aside.classList.toggle('inactive');
}