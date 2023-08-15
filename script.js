const menuEmail = document.querySelector('.navbar-email');
const menuSelection = document.querySelector('.menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
//const desktopMenu = document.querySelector('.desktop-menu');


const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideCart = document.querySelector('.product-detail');
//const desktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuSelection.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleAsideCart);
//menuShoppingCar.addEventListener('click', toggleAsideCar);

function toggleDesktopMenu() {
  asideCart.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  asideCart.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleAsideCart() {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  asideCart.classList.toggle('inactive');
}

  
  //version profesor
/*function toggleDesktopMenu() {
  const isAsideCartClosed = asideCart.classList.contains('inactive');

  if (!isAsideCartClosed) {
    asideCart.classList.add('inactive');    
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideCartClosed = asideCart.classList.contains('inactive');

  if (!isAsideCartClosed) {
    asideCart.classList.add('inactive');    
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleAsideCart() {
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');    
  } else if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  asideCart.classList.toggle("inactive");l
}*/