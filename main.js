const navEmail = document.querySelector('.navbar-email');
const navDesktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', togglehamburgerMenu);
menuCartIcon.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu(){
  // navDesktopMenu.classList.remove('inactive') Este lo hice yo pensando en remover la clase
  const isAsideClose = aside.classList.contains('inactive')
  if(!isAsideClose){
    aside.classList.add('inactive');
  }
  
  navDesktopMenu.classList.toggle('inactive');
}

function togglehamburgerMenu(){
  const isAsideClose = aside.classList.contains('inactive')
  if(!isAsideClose){
    aside.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClose = navDesktopMenu.classList.contains('inactive')
  
  if(!isMobileMenuClose){
    mobileMenu.classList.add('inactive');
  }
  if(!isDesktopMenuClose){
    navDesktopMenu.classList.add('inactive');
  }

  aside.classList.toggle('inactive');

}
