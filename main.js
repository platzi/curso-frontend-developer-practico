//desktopMenu
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
//aside
const aside = document.querySelector(".product-detail");
//mobile selector
const btnIconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
//Shopping cart
const shopCartIcon = document.querySelector(".navbar-shopping-cart");
const returnShopCart = document.querySelector(".title-container");

//event
menuEmail.addEventListener("click", toggleDesktopMenu);
btnIconMenu.addEventListener("click", toggleMobileMenu);
shopCartIcon.addEventListener("click", toggleCarritoAside);
returnShopCart.addEventListener("click", toggleCarritoAside);

//desktopMenu function
function toggleDesktopMenu() {
  if (aside.classList.contains("inactive")) {
    desktopMenu.classList.toggle("inactive");
  } else {
    aside.classList.add("inactive");
    desktopMenu.classList.remove("inactive");
  }
}

//mobileMenu function

function toggleMobileMenu() {
  if (aside.classList.contains("inactive")) {
    mobileMenu.classList.toggle("inactive");
  } else {
    aside.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
  }
}

//aside function

function toggleCarritoAside() {
  if (mobileMenu.classList.contains("inactive")) {
    aside.classList.toggle("inactive");
  } else {
    mobileMenu.classList.add("inactive");
    aside.classList.toggle("inactive");
  }
}
