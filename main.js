const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', togglemobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive')
  
  if(!isAsideClosed) {
    aside.classList.add('inactive');
}  
  console.log('Click');
  desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu(){
  const isAsideClosed = aside.classList.contains('inactive')

  if(!isCarritoClosed) {
    menuCarrito.classList.add('inactive');
}

  mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
const mobileMenuOpen = mobileMenu.classList.contains('inactive')
const isdesktopClosed = desktopMenu.classList.contains('inactive')

if(!isdesktopClosed) {
  desktopMenu.classList.add('inactive');
}

  if(!mobileMenuOpen) {
    mobileMenu.classList.add('inactive');
}

aside.classList.toggle('inactive')
}