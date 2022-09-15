//menu-var se añade a navbar

const menu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");

//menu-var-mobile se añade a navbar
const mobileMenu = document.querySelector(".mobile-menu");
const navMobile = document.querySelector(".menu");

navEmail.addEventListener("click", toggleDesktopMenu);

navMobile.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
    menu.classList.toggle("inactive");

}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}