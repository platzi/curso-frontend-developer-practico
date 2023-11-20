const menuIconEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIconMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuIconCarrito = document.querySelector(".navbar-shopping-cart");
const carritoMenu = document.querySelector(".product-detail");

//Menu desktop
menuIconEmail.addEventListener("click", toggleDesktopMenu);
//Menu mobile
menuIconMobile.addEventListener("click", toggleMobileMenu);
//menu carrito
menuIconCarrito.addEventListener("click", toggleCarritoMenu);

//Menu desktop
function toggleDesktopMenu() {
  const isCarritoMenuClosed = carritoMenu.classList.contains("inactive");

  if (!isCarritoMenuClosed) {
    carritoMenu.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive"); //para que lo muestre o no dependiendo si esta activo
}

//Menu mobile
function toggleMobileMenu() {
  const isCarritoMenuClosed = carritoMenu.classList.contains("inactive");

  if (!isCarritoMenuClosed) {
    carritoMenu.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive"); //para que lo muestre o no dependiendo si esta activo
}

//Menu carrito
function toggleCarritoMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  } else if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  carritoMenu.classList.toggle("inactive");
}
