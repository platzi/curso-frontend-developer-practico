const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuBurger = document.querySelector(".menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
