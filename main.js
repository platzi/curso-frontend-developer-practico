const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

navbarEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}

shoppingCart.addEventListener("click", toggleProductDetail);

function toggleProductDetail() {
  productDetail.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

document.addEventListener("mousedown", function (event) {
  if (event.target !== navbarEmail && !desktopMenu.contains(event.target)) {
    desktopMenu.classList.add("inactive");
  }
  
  if (event.target !== menuHamIcon && !mobileMenu.contains(event.target)) {
    mobileMenu.classList.add("inactive");
  }

   if (event.target !== shoppingCart && !productDetail.contains(event.target)) {
     productDetail.classList.add("inactive");
   }
});