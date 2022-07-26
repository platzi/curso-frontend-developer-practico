
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileIconMenu = document.querySelector('.menu');
const mainMenuMobile = document.querySelector('.mobile-menu');
const cartIconShopping = document.querySelector('.navbar-shopping-cart');
const cartShoppingList = document.querySelector('.product-detail');

navEmail.addEventListener('click', showDesktopMenu);
mobileIconMenu.addEventListener('click', showMobileMenu);
cartIconShopping.addEventListener('click', showListCartShopping);


function showDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
  cartShoppingList.classList.add('inactive');
};

function showMobileMenu(){
  mainMenuMobile.classList.toggle('inactive');
cartShoppingList.classList.add('inactive')
};

function showListCartShopping(){
 cartShoppingList.classList.toggle('inactive');
 mainMenuMobile.classList.add('inactive');

 const closedDestopMenu = desktopMenu.classList.contains('inactive');
 ;
 if (!closedDestopMenu){
  desktopMenu.classList.toggle('inactive');
 }
 
}








