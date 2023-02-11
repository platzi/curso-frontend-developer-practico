const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobilepMenu);

function toggleDesktopMenu() {
  //Si existe la clase inactive muestra el menu de la clase desktopMenu
  desktopMenu.classList.toggle("inactive");
}
function toggleMobilepMenu() {
  mobileMenu.classList.toggle("inactive");
}
