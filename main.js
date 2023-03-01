const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = !aside.classList.contains('inactive');
  if (isAsideClosed) {
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
  
}

function toggleMobileMenu() {
  const isAsideClosed = !aside.classList.contains('inactive');
  if (isAsideClosed) {
    aside.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = !mobileMenu.classList.contains('inactive');
  // aside.classList.toggle('inactive');
    if (isMobileMenuClosed) {
      mobileMenu.classList.add('inactive');
    }
    // si el mobileMenu esta abierto, hay que cerrarlo
    aside.classList.toggle('inactive');
}

