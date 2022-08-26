const navMail = document.querySelector(".navbar-email");
const menuMobileIcon = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const aside = document.querySelector(".product-detail");

navMail.addEventListener("click", toggleDesktopMenu);
menuMobileIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  menuMobile.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = menuMobile.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    menuMobile.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}
