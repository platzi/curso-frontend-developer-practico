const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

navEmail.addEventListener("click", toggleDesktopMenu);
hamMenu.addEventListener("click", toggleMobileMenu);
carritoIcon.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}

function toggleProductDetail() {
  productDetail.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
}
