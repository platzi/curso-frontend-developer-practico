const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener("click", toggleDesktopMenu);
burgerMenuIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu(params) {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(params) {
  mobileMenu.classList.toggle("inactive");
}
