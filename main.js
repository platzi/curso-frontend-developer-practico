const desktopMenu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email"); //Sera clickeable
const menuHamburger = document.querySelector(".menu"); //Sera clickeable
const mobileMenu = document.querySelector(".mobile-menu");
const menuCart = document.querySelector(".navbar-shopping-cart"); //Sera clickeable
const aside = document.querySelector(".product-detail");

function toggleMenuCart()  {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");

    }
    else if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");

    }
    aside.classList.toggle("inactive");


}

function toggleMobileMenu()  {
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");

}

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
      aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
    

}

menuHamburger.addEventListener("click",toggleMobileMenu);
navEmail.addEventListener("click",  toggleDesktopMenu);
menuCart.addEventListener("click",toggleMenuCart);