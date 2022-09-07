const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burguerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerIcon.addEventListener("click", showMobileMenu);
menuCarritoIcon.addEventListener("click", showMyOrder);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function showMobileMenu() {
  aside.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}

function showMyOrder() {
  mobileMenu.classList.add("inactive");
  aside.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
}
