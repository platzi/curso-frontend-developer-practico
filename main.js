const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconBurgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

navbarEmail.addEventListener("click", toggleDesktopMenu);
iconBurgerMenu.addEventListener("click", toggleMobileMenu);
navbarShoppingCart.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("active");
  productDetail.classList.add("active");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
  productDetail.classList.add("active");
}

function toggleProductDetail(){
  productDetail.classList.toggle("active")
  desktopMenu.classList.add("active");
  mobileMenu.classList.add("active");
}