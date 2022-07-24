const emailMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burguerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const cartMenuIcon = document.querySelector(".navbar-shopping-cart");
const cart = document.querySelector(".product-detail");




emailMenu.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  cart.classList.add("inactive");
}

burguerMenuIcon.addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  cart.classList.add("inactive");
}

cartMenuIcon.addEventListener("click", toggleCart);
function toggleCart() {
  cart.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}