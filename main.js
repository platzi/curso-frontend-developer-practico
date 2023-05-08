const menuIcon = document.querySelector(".menu-icon");
const menuEmail = document.querySelector(".navbar-email");
const menuMobile = document.querySelector(".mobile-menu");
const menuDesktop = document.querySelector(".desktop-menu");

menuIcon.addEventListener("click", toggleMenuMobile);
menuEmail.addEventListener("click", toggleMenuDesktop);

function toggleMenuMobile() {
    menuMobile.classList.toggle("inactive");
}

function toggleMenuDesktop() {
    menuDesktop.classList.toggle("inactive");
}