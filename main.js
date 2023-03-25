const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  // adds or removes .inactve to toggle the desktop menu
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  // adds or removes .inactve to toggle the mobile menu
}
