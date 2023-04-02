const $menuEmail = document.querySelector('.navbar-email');
const $desktopMenu = document.querySelector('.desktop-menu');
const $cartShopping = document.querySelector('.navbar-shopping-cart');
const $aside = document.querySelector('.product-detail');
const $iconMenu = document.querySelector('.iconMenu');
const $mobileMenu = document.querySelector('.mobile-menu');



$menuEmail.addEventListener('click', toggleDesktopMenu);
$iconMenu.addEventListener('click', toggleMobileMenu);
$cartShopping.addEventListener('click', toggleCartShopping);
function toggleDesktopMenu(){

  const isAsideClosed = $aside.classList.contains('inactive');
  if(!isAsideClosed){
    $aside.classList.add('inactive')
  }
  $desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const isAsideClosed = $aside.classList.contains('inactive')
  if(!isAsideClosed){
    $aside.classList.add('inactive')
  }
  $mobileMenu.classList.toggle('inactive');
}

function toggleCartShopping(){
  const isMobileMenuClosed = $mobileMenu.classList.contains('inactive');
  
  if(!isMobileMenuClosed){
    $mobileMenu.classList.add('inactive')
  }

  $aside.classList.toggle('inactive')
  
}