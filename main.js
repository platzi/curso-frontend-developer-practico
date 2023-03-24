const $ = (selector) => document.querySelector(selector);
const navbarEmail = $(".navbar-email");
const desktopMenu = $(".desktop-menu");

const menuIcon = $(".menu");
const mobileMenu = $(".mobile-menu");

const productDetail = $(".product-detail");
const navShopCart = $(".navbar-shopping-cart");

navbarEmail.addEventListener("click", toogleDesktopMenu);
menuIcon.addEventListener("click", toogleMenuMobile);
navShopCart.addEventListener("click", toogleShoppingCart);

function toogleDesktopMenu() {
  productDetail.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toogleMenuMobile() {
  mobileMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}

function toogleShoppingCart() {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetail.classList.toggle("inactive");
}
