const touchEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

touchEmail.addEventListener("click", toggletouchEmail);
menuBurguer.addEventListener("click", toggleMobileMenu);

function toggletouchEmail(){
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}