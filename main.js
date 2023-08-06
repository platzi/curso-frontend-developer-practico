const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenuIcon.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}
function toggleProductDetail() {
  productDetail.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}
