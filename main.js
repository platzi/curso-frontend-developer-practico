const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenuToggler = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

function toggleDesktopMenu() {
  const isAsideMenuOn = !aside.classList.contains("inactive");
  if (isAsideMenuOn) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isAsideMenuOn = !aside.classList.contains("inactive");
  if (isAsideMenuOn) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}
function toggleCartAside() {
  const isMobileMenuOn = !mobileMenu.classList.contains("inactive");
  if (isMobileMenuOn) {
    mobileMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}

menuEmail.addEventListener("click", toggleDesktopMenu);
iconMenuToggler.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleCartAside);
