const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const icon = document.querySelector(".icon");
const mobileMenu = document.querySelector(".mobile-menu");



menuEmail.addEventListener("click", showDesktopMenu);
icon.addEventListener("click", showMobileMenu);

function showDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

function showMobileMenu(){
    mobileMenu.classList.toggle("activo");
}