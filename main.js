const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcom = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcom.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
