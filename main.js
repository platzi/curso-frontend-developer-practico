const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuBurger = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click' , toggleDesktopMenu);
menuBurger.addEventListener('click' , toggleMobileMenu);
menuCarrito.addEventListener('click' , toggleAside);

 function toggleDesktopMenu() {
   const isAideMenuClosed = aside.classList.contains('inactive');

   if (!isAideMenuClosed) {
      aside.classList.add('inactive');
   }

   desktopMenu.classList.toggle('inactive');
 }

function toggleMobileMenu() {
   const isAideMenuClosed = aside.classList.contains('inactive');

   if (!isAideMenuClosed) {
      aside.classList.add('inactive');
   }

   menuMobile.classList.toggle('inactive');
 }

 function toggleAside() {
   const isMobileMenuClosed = menuMobile.classList.contains('inactive');
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

   if (!isMobileMenuClosed) {
      menuMobile.classList.add('inactive');
   }
   if (!isDesktopMenuClosed) {
      desktopMenu.classList.add('inactive');
   }
   
   aside.classList.toggle('inactive');
 }