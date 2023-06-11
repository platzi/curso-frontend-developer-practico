const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carrito = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
carrito.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    console.log("click")
    desktopMenu.classList.toggle("inactive");
    if (!desktopMenu.classList.contains("inactive")) {
        mobileMenu.classList.add("inactive");
        aside.classList.add("inactive");
    }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    if (!mobileMenu.classList.contains("inactive")) {
        desktopMenu.classList.add("inactive");
        aside.classList.add("inactive");
    }
}

function toggleCarritoAside() {
    console.log("Click");
    aside.classList.toggle("inactive");
    if (!aside.classList.contains("inactive")) {
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.add("inactive");
    }

}