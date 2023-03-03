const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const BurguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const Carrito_icon = document.querySelector(".navbar-shopping-cart");
const aside_carrito = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
BurguerMenu.addEventListener("click", toggleMobileMenu);
Carrito_icon.addEventListener("click", toggleCar);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  console.log("prueba");
  const IsCarritoClosed = aside_carrito.classList.contains("inactive");

  if (!IsCarritoClosed) {
    aside_carrito.classList.add("inactive");
  }
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  const IsCarritoClosed = aside_carrito.classList.contains("inactive");

  if (!IsCarritoClosed) {
    aside_carrito.classList.add("inactive");
  }
}

function toggleCar() {
  aside_carrito.classList.toggle("inactive");
  const IsMobileClosed = mobileMenu.classList.contains("inactive");

  if (!IsMobileClosed) {
    mobileMenu.classList.add("inactive");
  }
}
