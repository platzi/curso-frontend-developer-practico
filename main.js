const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const buttonMenuMobile = document.querySelector(".menuMobile");
const menuMobile = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const asideShoppingCart = document.querySelector(".product-detail");

navEmail.addEventListener("click", toggleDesktopMenu);
buttonMenuMobile.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleShoppingCart);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    asideShoppingCart.classList.add("inactive");
}

function toggleMobileMenu() {
    menuMobile.classList.toggle("inactive");
    asideShoppingCart.classList.add("inactive");
}

function toggleShoppingCart() {
    asideShoppingCart.classList.toggle("inactive");
    menuMobile.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}