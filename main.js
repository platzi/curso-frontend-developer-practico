const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerIcon = document.querySelector(".menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggleDesktopMenu);
cartIcon.addEventListener("click", toggleCartAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

function toggleDesktopMenu() {
    mobileMenu.classList.toggle("inactive");
}

function toggleCartAside(){
    aside.classList.toggle("inactive");
}