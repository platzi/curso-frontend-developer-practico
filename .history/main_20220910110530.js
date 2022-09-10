const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu () {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

  //si mobileMenu esta open, hay que cerrarlo
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }
  mobileMenu.classList.toggle('inactive')
}

menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleCarritoAside () {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

  //si mobileMenu esta open, hay que cerrarlo
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }

  aside.classList.toggle('inactive')

}

