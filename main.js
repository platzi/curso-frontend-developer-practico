const navbar_email = document.querySelector(".navbar-email");
const desktop_menu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".menu");
const mobile_menu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const asideCart = document.querySelector(".product-detail");

navbar_email.addEventListener("click", toggleDesktopMenu);
shoppingCart.addEventListener("click", toggleShoppingAside);
menuMobile.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktop_menu.classList.toggle("inactive");
  asideCart.classList.add("inactive");
}

function toggleMobileMenu() {
  asideCart.classList.add("inactive");
  mobile_menu.classList.toggle("inactive");
}

function toggleShoppingAside() {
  asideCart.classList.toggle("inactive");
  mobile_menu.classList.add("inactive");
  desktop_menu.classList.add("inactive");
}
