const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoHamIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoHamIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideMenuClosed = aside.classList.contains("inactive");

    if (!isAsideMenuClosed) {
        aside.classList.add("inactive");
    }
    
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isAsideMenuClosed = aside.classList.contains("inactive");

    if (!isAsideMenuClosed) {
        aside.classList.add("inactive");
    }
    
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if(!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add("inactive");  
        desktopMenu.classList.add("inactive"); 
        aside.classList.add("inactive");
    } 
    
    aside.classList.toggle("inactive"); 

}
