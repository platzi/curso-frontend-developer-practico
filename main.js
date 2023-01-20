const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  //   desktopMenu.className === "desktop-menu inactive"
  //     ? (desktopMenu.className = "desktop-menu")
  //     : (desktopMenu.className = "desktop-menu inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  isAsideOpen = !aside.classList.contains("inactive");

  if (isAsideOpen) {
    aside.classList.toggle("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.toggle("inactive");
  }

  aside.classList.toggle("inactive");
}
