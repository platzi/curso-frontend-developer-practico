const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.icon-menu');
const menuMobile = document.querySelector('.mobile-menu');
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

/* Function for Desktop Menu */
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
   menuDesktop.classList.toggle('inactive')

   const isAsideClosed = aside.classList.contains('inactive');
   if(!isAsideClosed){
      aside.classList.add('inactive');
   }

}

/* Function for mobile Menu */

menuHamIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu(){
   const isAsideClosed = aside.classList.contains('inactive');
   if(!isAsideClosed){
      aside.classList.add('inactive');
   }

   menuMobile.classList.toggle('inactive');
}

/* Function for Aside */

shoppingCartMenu.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart(){
   const isMenuMobileClosed = menuMobile.classList.contains('inactive');
   if(!isMenuMobileClosed){
      menuMobile.classList.add('inactive');
   }
   aside.classList.toggle('inactive')
}