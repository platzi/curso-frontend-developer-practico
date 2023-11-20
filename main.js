const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIconMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

//Menu desktop
menuEmail.addEventListener("click", toggleDesktopMenu);
//Menu mobile
menuIconMobile.addEventListener("click", toggleMobileMenu);

//Menu desktop
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive"); //para que lo muestre o no dependiendo si esta activo
}

//Menu mobile
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive"); //para que lo muestre o no dependiendo si esta activo
}
