const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCar = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

//Desktop menu
menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains ("inactive");

    if(!isAsideClosed){
        aside.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive")
}
/////////////////////////////////////////////////////////////

//Burger menu
burguerMenu.addEventListener('click', toogleMobileMenu);

function toogleMobileMenu(){
    const isAsideClosed = aside.classList.contains ("inactive");

    if(!isAsideClosed){
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
    
}
//////////////////////////////////////////////////////////////

//Shopping car
shoppingCar.addEventListener("click", toggleShoppingCar);

function toggleShoppingCar(){
    const isMobileMenuClosed = mobileMenu.classList.contains ("inactive");

    if (!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");

}