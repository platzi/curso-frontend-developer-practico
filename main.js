const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburgerButton = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navbarEmail.addEventListener("click", toggleDesktopMenu);
hamburgerButton.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
