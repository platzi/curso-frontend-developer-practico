const menuEmail = document.querySelector(".navbar-email");
const deskopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

menuEmail.addEventListener("click", showDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleCarritoMenu);

function toggleCarritoMenu() {
  const isMobileMenuClose = mobileMenu.classList.contains("inactive");

  //Si el menu de mobil esta abierto, cierralo
  if (!isMobileMenuClose) {
    //Cerrando menu
    mobileMenu.classList.add("inactive");
  }
  //El carro de compras aparece si o si al final de esta funcion
  productDetail.classList.toggle("inactive");
}

function showDesktopMenu() {
  const isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }

  deskopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isProductDetailMenuClose = productDetail.classList.contains("inactive");

  //Si el carro de compras esta open, hay que cerrarlo
  if (!isProductDetailMenuClose) {
    //cerrando el product detail
    productDetail.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}
