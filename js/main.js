const menuEmail = document.querySelector(".email-nav");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu-burger");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}