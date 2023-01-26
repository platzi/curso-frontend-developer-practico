var menuEmail = document.querySelector(".navbar-email");
var desktopMenu = document.querySelector(".desktop-menu");
var mainMenu = document.querySelector(".menu");
var mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
mainMenu.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
