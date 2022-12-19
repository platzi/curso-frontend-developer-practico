const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aSide = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
function toggleDesktopMenu(){
    mobileMenu.classList.add("inactive");
    aSide.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    aSide.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    aSide.classList.toggle("inactive");
}