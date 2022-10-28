const navEmail = document.querySelector(".navbar-email");
const burgerMenu = document.querySelector(".menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleShopingCart);

function toggleDesktopMenu() {
  const isAsideClosed = asideProductDetail.classList.contains("inactive");

  if(!isAsideClosed) {
    asideProductDetail.classList.add('inactive');
  }

  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isAsideClosed = asideProductDetail.classList.contains("inactive");

  if(!isAsideClosed) {
    asideProductDetail.classList.add('inactive');
  }

  mobileMenu.classList.toggle("inactive");
}
function toggleShopingCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  asideProductDetail.classList.toggle("inactive");
}