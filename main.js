const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

navbarEmail.addEventListener("click", toggleDesktopMenu);
menu.addEventListener("click", toggleMobileMenu);
navbarShoppingCart.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu() {
  productDetail.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isProductDetailActive = !productDetail.classList.contains("inactive");
  mobileMenu.classList.toggle("inactive");

  if (isProductDetailActive) {
    productDetail.classList.add("inactive");
    console.log("product detail is active");
  }
}

function toggleProductDetail() {
  const isMobileMenuActive = !mobileMenu.classList.contains("inactive");
  const isDesktopMenuActive = !desktopMenu.classList.contains("inactive");
  productDetail.classList.toggle("inactive");
  if (isMobileMenuActive) {
    mobileMenu.classList.add("inactive");
  } else if (isDesktopMenuActive) {
    desktopMenu.classList.add("inactive");
  }
}
