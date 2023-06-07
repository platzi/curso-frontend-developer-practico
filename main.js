const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburgerMenu = document.querySelector(".menu");
const carritoMenu = document.querySelector(".navbar-shopping-cart");
const asideProduct = document.querySelector(".product-detail");

/* * Se agregan controladores de eventos a los elementos
    @param MyParam es un parametro
*/
menuEmail.addEventListener("click", toggleDesktopMenu);
hamburgerMenu.addEventListener("click", toggleMobileMenu);
carritoMenu.addEventListener("click", toggleAsideProduct);

function toggleDesktopMenu() {
  const isAsideProductClosed = asideProduct.classList.contains("inactive");
  if (!isAsideProductClosed) {
    asideProduct.classList.toggle("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideProductClosed = asideProduct.classList.contains("inactive");
  if (!isAsideProductClosed) {
    asideProduct.classList.toggle("inactive");
  }
  
  mobileMenu.classList.toggle("inactive");
}

function toggleAsideProduct() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.toggle("inactive");
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.toggle("inactive");
  }
  asideProduct.classList.toggle("inactive");
}
