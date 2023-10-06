const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoMenu = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
carritoMenu.addEventListener("click", toggleAsideMenu);


function toggleDesktopMenu(){
    const isAsideClose = aside.classList.contains("inactive");
   
    if(!isAsideClose){
        aside.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    const isAsideClose = aside.classList.contains("inactive");
   
    if(!isAsideClose){
        aside.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}

function toggleAsideMenu(){
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if(!isDesktopMenuClosed | !isMobileMenuClosed){
        desktopMenu.classList.add("inactive")
        mobileMenu.classList.add("inactive")
    }
    aside.classList.toggle("inactive")
}