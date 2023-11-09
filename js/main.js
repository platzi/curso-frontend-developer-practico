const menuEmail = document.querySelector(".email-nav");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu-burger");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCart = document.querySelector(".navbar-shopping-cart");
const asideCartMenu = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);
menuCart.addEventListener("click", toggleAsideCartMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    asideCartMenu.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    asideCartMenu.classList.add('inactive');
}

function toggleAsideCartMenu() {
    asideCartMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}