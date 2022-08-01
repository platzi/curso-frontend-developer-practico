const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetail = document.querySelector(".product-detail");
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburger.addEventListener("click", toggleMobileMenu);
navbarShoppingCart.addEventListener("click", toogleCarritoAside);
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }
}
function toogleCarritoAside() {
  productDetail.classList.toggle("inactive");
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.add("inactive");
  }
  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }
}
