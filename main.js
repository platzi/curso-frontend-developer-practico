const navEmail = document.getElementsByClassName("navbar-email")[0];
const desktopMenu = document.getElementsByClassName("desktop-menu")[0];
const hamburgerMenuIcon = document.getElementsByClassName("menu")[0];
const mobileMenu = document.getElementsByClassName("mobile-menu")[0];

navEmail.addEventListener("click", toggleDesktopNav);
hamburgerMenuIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopNav() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
