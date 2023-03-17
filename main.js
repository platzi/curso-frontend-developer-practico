// Desktop menu
const navLink = document.querySelector(".navbar-email");
const desktopInactive = document.querySelector(".desktop-menu");
// Movile menu
const burger = document.querySelector(".menu-burger");
const mobileInactive = document.querySelector(".mobile-menu");
// Shopping car
const productDetail = document.querySelector(".product-detail")
const shoppingCar = document.querySelector(".navbar-shopping-cart")

navLink.addEventListener("click", toggleMenu);
burger.addEventListener("click", toggleBurger)
shoppingCar.addEventListener("click", toggleShoppingCar);

function toggleMenu() {
    desktopInactive.classList.toggle("inactive");
}
function toggleBurger() {
    productDetail.classList.add("inactive");
    mobileInactive.classList.toggle("inactive");
}

function toggleShoppingCar() {
    mobileInactive.classList.add("inactive");
    productDetail.classList.toggle("inactive");
}
