const menuFromEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuBurgerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetailSummary = document.querySelector(".product-detail")

menuFromEmail.addEventListener("click", toggleDesktopMenu);
menuBurgerIcon.addEventListener("click", toggleMenuBurger);
shoppingCartIcon.addEventListener("click", toggleSummaryFromShoppingCart);


function toggleDesktopMenu() {

    productDetailSummary.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");

};

function toggleMenuBurger() {

    productDetailSummary.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
};

function toggleSummaryFromShoppingCart() {

    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailSummary.classList.toggle("inactive");
};
