const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    const isCarritoAsideClosed = aside.classList.contains("inactive")

    if (!isCarritoAsideClosed) {
        aside.classList.toggle("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isCarritoAsideClosed = aside.classList.contains("inactive");
    
    if (!isCarritoAsideClosed) {
        aside.classList.toggle("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
    const isDesktopMEnuClosed = desktopMenu.classList.contains("inactive");

    if (!isDesktopMEnuClosed) {
        desktopMenu.classList.toggle("inactive");
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle("inactive");
    }

    aside.classList.toggle("inactive");
}