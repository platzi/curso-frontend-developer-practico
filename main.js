const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const BurguerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", toggleDesktopMenu);
BurguerMenu.addEventListener("click", toggleMobileMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
    console.log("prueba")
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
}