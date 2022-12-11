const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive"); //classList.toggle permite poner o quitar la clase inactive dependiendo si ya la tiene o no
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive"); //classList.toggle permite poner o quitar la clase inactive dependiendo si ya la tiene o no
}
