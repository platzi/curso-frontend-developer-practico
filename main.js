const navbarEmail = document.querySelector(".navbar-email");
const iconMenu = document.querySelector(".menu");
const iconShoppingCart = document.querySelector(".navbar-shopping-cart");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetail = document.querySelector(".product-detail");

navbarEmail.addEventListener("click", toggleDesktopMenu);
iconMenu.addEventListener("click", toggleMobileMenu);
iconShoppingCart.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu() {
  productDetail.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  productDetail.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}

function toggleProductDetail() {
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetail.classList.toggle("inactive");
}
