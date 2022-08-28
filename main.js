const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const mobileMenuButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartButton = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuButton.addEventListener('click', toggleMobileMenu);
shoppingCartButton.addEventListener('click', toggleproductDetail);

function toggleDesktopMenu () {
  menuDesktop.classList.toggle('inactive');
}
function toggleMobileMenu() {
  const productDetailClosed = productDetail.classList.contains('inactive');

  if(!productDetailClosed) {
    productDetail.classList.add('inactive')
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleproductDetail() {
  const mobileMenuClosed = mobileMenu.classList.contains('inactive');
  const menuDesktopClosed = menuDesktop.classList.toggle('inactive');

  if(!mobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }
  if(!menuDesktopClosed) {
    menuDesktop.classList.add('inactive')
  }
  productDetail.classList.toggle('inactive');
}