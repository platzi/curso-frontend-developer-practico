const menuEmail = document.querySelector('.navbar-email');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCartIcon.addEventListener('click',toggleAsideCart);

function toggleDesktopMenu(){
  const isAsideOpen = !aside.classList.contains('inactive');
  if(isAsideOpen){
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){
  const isAsideOpen = !aside.classList.contains('inactive');
  if(isAsideOpen){
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');

}

function toggleAsideCart(){
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

  if(isMobileMenuOpen){
    mobileMenu.classList.add('inactive');
  } else if (isDesktopMenuOpen){
    desktopMenu.classList.add('inactive');
  }
  aside.classList.toggle('inactive');

}