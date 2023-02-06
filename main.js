// Desktop Menu
const email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

email.addEventListener('click', ToggleDesktopMenu);

function ToggleDesktopMenu(){
  const isAsideClosed = !asideMenu.classList.contains('inactive');

  if(isAsideClosed){
    asideMenu.classList.add('ocultoMenuCart');
  }
  desktopMenu.classList.toggle('ocultoMenuDesktop');
}

// Burguer Menu

const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

burguerIcon.addEventListener('click', ToggleMobileMenu);

function ToggleMobileMenu(){
  const isAsideClosed = !asideMenu.classList.contains('inactive');

  if(isAsideClosed){
    asideMenu.classList.add('ocultoMenuCart');
  }
  mobileMenu.classList.toggle('ocultoMenuMobile');
}

// Cart Menu

const cartIcon = document.querySelector('.navbar-shopping-cart');
const asideMenu = document.querySelector('.product-detail');

cartIcon.addEventListener('click', ToggleCartMenu);

function ToggleCartMenu(){
  const isMobileClosed = !mobileMenu.classList.contains('ocultoMenuMobile');
  const isDesktopClosed = !desktopMenu.classList.contains('ocultoMenuDesktop');

  if(isMobileClosed){
    mobileMenu.classList.add('ocultoMenuMobile');
  }else if(isDesktopClosed){
    desktopMenu.classList.add('ocultoMenuDesktop');
  }

  asideMenu.classList.toggle('ocultoMenuCart');
}