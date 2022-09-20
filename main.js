const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMeny);

function toggleDesktopMeny() {
  desktopMenu.classList.toggle("inactive");
}

// mobile selector

const btnIconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

btnIconMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
