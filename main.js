const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const buttonMenuMobile = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");

navEmail.addEventListener("click", toggleDesktopMenu);
buttonMenuMobile.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    menuMobile.classList.toggle("inactive");
}