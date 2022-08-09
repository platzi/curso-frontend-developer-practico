const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const BurguerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navBarEmail.addEventListener('click', toggleDesktopMenu);
BurguerMenuIcon.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu() {
   const isAsideClosed = aside.classList.contains('inactive');

   if (!isAsideClosed) {
      aside.classList.add('inactive');
   }

   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
   const isAsideClosed = aside.classList.contains('inactive');

   if (!isAsideClosed) {
      aside.classList.add('inactive');
   }

   mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu() {
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

   if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive');
   }

   if (!isDesktopMenuClosed) {
      desktopMenu.classList.add('inactive');
   }
   aside.classList.toggle('inactive');
}
