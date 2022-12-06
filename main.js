//Agregando quitar y poner Display: none para poner y quitar el Menu Desktop

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const producDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  
  const isAsideMenuClosed = producDetail.classList.contains('inactive')

  if(!isAsideMenuClosed) {
    producDetail.classList.add('inactive')
  } 
  desktopMenu.classList.toggle('inactive')
}

menuHamIcon.addEventListener('click', toggleMobileMenu);


function toggleMobileMenu() {
  const isAsideMenuClosed = producDetail.classList.contains('inactive')

  if(!isAsideMenuClosed) {
    producDetail.classList.add('inactive')
  } 
  mobileMenu.classList.toggle('inactive')
}

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside () {
  const ismobilMenuClosed = mobileMenu.classList.contains('inactive')

  if(!ismobilMenuClosed) {
    mobileMenu.classList.add('inactive')
  } 
  
  producDetail.classList.toggle('inactive'); 
}

