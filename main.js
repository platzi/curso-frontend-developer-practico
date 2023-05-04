const menuEmail = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");
const menuHam = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
menuEmail.addEventListener("click", toggleMenu);
menuHam.addEventListener("click", toggleMobileMenu);

function toggleMenu() {
  menu.classList.toggle("slide-desktop");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("slide");
}
