const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerIcon = document.querySelector(".menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleCartAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
    // const isAsideClosed = aside.classList.contains("inactive");

    // if (!isAsideClosed) {
    //     aside.classList.toggle("inactive");
    // }
    // desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    aside.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
    // const isAsideClosed = aside.classList.contains("inactive");

    // if (!isAsideClosed) {
    //     aside.classList.toggle("inactive");
    // }
    // mobileMenu.classList.toggle("inactive");
}

function toggleCartAside(){
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    aside.classList.toggle("inactive");
    // const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    // const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    // if (!isMobileMenuClosed) {
    //     mobileMenu.classList.add("inactive");
    // }else if (!isDesktopMenuClosed){
    //     desktopMenu.classList.add('inactive');
    // }
    // aside.classList.toggle("inactive");
    
    
} 