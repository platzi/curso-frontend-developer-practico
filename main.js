const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleMenuDesktop);
menuHamIcon.addEventListener("click", toggleMenuMobile);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleMenuDesktop(event) {
  const isAssideMenuClosed = aside.classList.contains("inactive");
  if (!isAssideMenuClosed) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile(event) {
  const isAssideMenuClosed = aside.classList.contains("inactive");
  if (!isAssideMenuClosed) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(event) {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  //si mobileMenu está open, hay que cerralo
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}
