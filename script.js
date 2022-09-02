const displayMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailMenu = document.querySelector('.product-detail');

displayMenu.addEventListener('click', toggleDesktopMenu);
hamburguerMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleproductDetailMenu);

function toggleDesktopMenu() {
  const isproductDetailMenu = productDetailMenu.classList.contains('inactive');
  if (!isproductDetailMenu) {
    productDetailMenu.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(event) {
  const isproductDetailMenu = productDetailMenu.classList.contains('inactive');
  if (!isproductDetailMenu) {
    productDetailMenu.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
};

function toggleproductDetailMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }

  productDetailMenu.classList.toggle('inactive');
};
