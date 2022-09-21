const menuEmail = document.querySelector(".navbar-email"); //toma el elemento email del archivo html
const desktopMenu = document.querySelector(".desktop-menu"); //toma el elemento de menu del archivo html
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu); //agrega un eventListener al elemento email, cuando se haga click va a ocurrir algo

function toggleDesktopMenu() { //es lo que ocurre cuandose hace click. la funcion toggle
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");desktopMenu.classList.toggle("inactive"); 
}

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    const isAsideClosedAgain = aside.classList.contains("inactive");

    if (!isAsideClosedAgain) {
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive"); 
}

menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }
    
    aside.classList.toggle("inactive");
}