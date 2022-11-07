const memuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHanIcon = document.querySelector("img");
const mobileMenu = document.querySelector(".mobile-menu");

// Funciones listeners
memuEmail.addEventListener("click", toggleDesktopMenu);
menuHanIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
