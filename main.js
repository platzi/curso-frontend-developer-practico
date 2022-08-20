//MENU DESKTOP
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

//MENU MOBILE
const menuHamburger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

//WORK
function toggleDesktopMenu() {
  // si la clase inactive está presente la elimina, de lo contrario la añade
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  // si la clase inactive está presente la elimina, de lo contrario la añade
  mobileMenu.classList.toggle("inactive");
}

//EVENT
navEmail.addEventListener("click", toggleDesktopMenu);

menuHamburger.addEventListener("click", toggleMobileMenu);
