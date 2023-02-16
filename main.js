const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const shoppingCar = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

navEmail.addEventListener("click", function () {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
});

burguerMenu.addEventListener("click", function () {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
});

shoppingCar.addEventListener("click", function () {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
});
