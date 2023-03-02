// Desktop menu
const navLink = document.querySelector(".navbar-email");
const desktopInactive = document.querySelector(".desktop-menu");
// Movile menu
const burger = document.querySelector(".menu-burger");
const mobileInactive = document.querySelector(".mobile-menu");

navLink.addEventListener("click", toggleMenu);
burger.addEventListener("click", toggleBurger)

function toggleMenu() {
    desktopInactive.classList.toggle("inactive");
}
function toggleBurger() {
    mobileInactive.classList.toggle("inactive");
}
