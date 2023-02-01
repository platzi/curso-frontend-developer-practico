const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerpMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartShoppingMenu = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerpMenuIcon.addEventListener("click", toggleMobileMenu);
cartShoppingMenu.addEventListener("click", toggleCartShoppingMenu);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  // para abrir el menu desktop tenemos que ocultar el aside si estaba abierto y darle click al menu desktop.
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    // para abrir el menu mobil tenemos que ocultar el aside si estaba abierto y darle click al menu mobile para abrirlo.
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCartShoppingMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isdesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    // para abrir el carrito de compras(aside) tenemos que ocultar el menu mobil si estaba abierto y darle click al carrito de compras.
    mobileMenu.classList.add("inactive");
  } else if (!isdesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}
