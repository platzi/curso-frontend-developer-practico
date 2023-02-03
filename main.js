const menuEmail = document.querySelector(".navbar-email");
const menuBurger = document.querySelector(".menu");
const cartList = document.querySelector(".navbar-shopping-cart");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);
cartList.addEventListener("click", toggleCartList);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}
function toggleCartList() {
  mobileMenu.classList.add("inactive");
  aside.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
}
