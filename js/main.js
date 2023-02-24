const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");

email.addEventListener("click", toggleDesktopMenu);
menu.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}