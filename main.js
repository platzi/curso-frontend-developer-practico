const menuEmail = document.querySelector(".navbar-email");
const burgerMenu = document.querySelector(".menu");
const iconCardtMenu = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
iconCardtMenu.addEventListener("click", toggleIconCartMenu);

function toggleDesktopMenu() {
    const isIconCardtMenuClosed = aside.classList.contains("inactive");

  if (!isIconCardtMenuClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isIconCardtMenuClosed = aside.classList.contains("inactive");

  if (!isIconCardtMenuClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleIconCartMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}
