const desktop_menu = document.querySelector(".desktop-menu");
const email = document.querySelector(".navbar-email a");

const mobile_menu = document.querySelector(".mobile-menu");
const icon_menu = document.querySelector(".menu");

const shopping_car = document.querySelector(".navbar-shopping-cart");
const products_car = document.querySelector(".product-detail");
const return_products_car = document.querySelector(".title-container img");

email.addEventListener("click", toggleDesktopUser);
icon_menu.addEventListener("click", toggleMobileMenu);

shopping_car.addEventListener("click", toggleProductsCar);
return_products_car.addEventListener("click", toggleProductsCar);

function toggleDesktopUser(event) {
  event.preventDefault();
  desktop_menu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobile_menu.classList.toggle("inactive");
}

function toggleProductsCar() {
  products_car.classList.toggle("inactive");
}
