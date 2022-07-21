const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const btnMobileMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");

navEmail.addEventListener("click", toggleDesktopMenu);
btnMobileMenu.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleAsideProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  asideProductDetail.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  asideProductDetail.classList.add("inactive");
}

function toggleAsideProductDetail() {
  asideProductDetail.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}
