const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  closeMenus(aside);

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  closeMenus(aside);

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  closeMenus(mobileMenu);

  aside.classList.toggle("inactive");
}

function closeMenus(close) {
  close.classList.add("inactive");
}
