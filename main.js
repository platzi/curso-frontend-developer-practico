const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerIcon = document.querySelector(".menu");
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerIcon.addEventListener("click", toggleMobileMenu);
carritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    aside.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    aside.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    aside.classList.toggle("inactive");
}