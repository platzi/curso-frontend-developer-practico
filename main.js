const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document;

body.addEventListener("click", closeDesktopMenu);
menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);

function closeDesktopMenu(event) {
  if (
    event.target.classList.contains("navbar-email") ||
    event.target.classList.contains("desktop-menu") ||
    event.target.classList.contains("menu") ||
    event.target.classList.contains("mobile-menu")
  ) {
    //no se cierre el menu si se hace click en navbar-email o desktop-menu
  } else {
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
  }
}

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
