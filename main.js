const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navbarEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

// Seleccionar mobel menu para hacer que aparezca y desaparezca
// y el menu hamburguesa
const mobileMenu = document.querySelector(".mobile-menu");
const burguerMenuIcon = document.querySelector(".menu");

burguerMenuIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}