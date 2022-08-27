const navbar_email = document.querySelector(".navbar-email");
const desktop_menu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".menu");
const mobile_menu = document.querySelector(".mobile-menu");

navbar_email.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  desktop_menu.classList.toggle("inactive");
}

menuMobile.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  mobile_menu.classList.toggle("inactive");
}
