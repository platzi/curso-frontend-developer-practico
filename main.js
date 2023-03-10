const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburger = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburger.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClose = aside.classList.contains("inactive");

  if (!isAsideClose) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClose = aside.classList.contains("inactive");

  if (!isAsideClose) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenu = desktopMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  } else if (!isDesktopMenu) {
    desktopMenu.classList.add("inactive")
  }
  aside.classList.toggle("inactive");
}
