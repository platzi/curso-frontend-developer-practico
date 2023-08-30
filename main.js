const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoShop = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu); //toggle es como intercambiar
hamburMenu.addEventListener("click", toggleMobileMenu);
carritoShop.addEventListener("click", toggleCarritoShop);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if(!isAsideClosed){
        aside.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if(!isAsideClosed){
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoShop(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inative");
    const isDesktopMenuClosed =desktopMenu.classList.contains("inactive");

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }
    aside.classList.toggle("inactive");

}