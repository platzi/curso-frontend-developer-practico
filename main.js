const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuBurguerIcon = document.querySelector('.menu-burguer');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const asideMenu = document.querySelector('.product-detail');


// Eventos
menuEmail.addEventListener('click', toggleDesktopMenu);

mobileMenu.classList.remove('activo')
menuBurguerIcon.addEventListener('click', toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);


// Funciones
function toggleDesktopMenu() {
  const isAsideClosed = asideMenu.classList.contains('inactive');

  if (!isAsideClosed) {
    asideMenu.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {
  const isAsideClosed = asideMenu.classList.contains('inactive');

  if (!isAsideClosed) {
    asideMenu.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed || !isDesktopMenuClosed) {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
  }
  asideMenu.classList.toggle('inactive');
}

