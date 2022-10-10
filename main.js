const menuEmail = document.querySelector('.navbar-email');
const menuHambIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopmenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
  const isAsideClose = aside.classList.contains('inactive');
 
  if(isAsideClose){
    aside.classList.add('inactive');
  }

  desktopmenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const isAsideClosed = aside.classList.contains('inactive');

 if(!isAsideClosed){
    aside.classList.add('inactive');

  }


  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');


  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');

  }
  aside.classList.toggle('inactive');
}