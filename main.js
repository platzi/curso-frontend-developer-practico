const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menucarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toogleDesktopMenu);
menuHamIcon.addEventListener("click", toogleMobileMenu);
menucarritoIcon.addEventListener("click", toogleCarritoAside);


function toogleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive");
}

function toogleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive");
}

function toogleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive")
    }
    aside.classList.toggle("inactive");
}

