const menuEmail =document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggledesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);


function toggledesktopMenu(){
  const IsAsideClosed = aside.classList.contains('inactive')
  if (!IsAsideClosed){
    aside.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const IsAsideClosed = aside.classList.contains('inactive')
  if (!IsAsideClosed){
    aside.classList.add('inactive')
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
  }
  aside.classList.toggle('inactive');
}