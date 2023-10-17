const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarBuy = document.querySelector(".navbar-shopping-cart")
const li = document.querySelectorAll("li")

const destopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDestopMenu);
menuHamIcon.addEventListener("click", togglemobileMenu);
menuCarBuy.addEventListener("click", toggleCarAside);



function toggleDestopMenu () {
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }
    destopMenu.classList.toggle("inactive")

    

}
function togglemobileMenu () {
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive")

}
function toggleCarAside () {

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = destopMenu.classList.toggle("inactive");

    if (!isDesktopMenuClosed) {
        destopMenu.classList.add("inactive")

    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }

    aside.classList.toggle("inactive")

}
