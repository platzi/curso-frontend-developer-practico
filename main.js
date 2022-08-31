const NavEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");

const BurgerStyleMenuBar = document.querySelector(".menu");
const MobileMenu = document.querySelector(".mobile-menu");

const CartMenu = document.querySelector(".navbar-shopping-cart")
const Aside = document.querySelector(".product-detail");


NavEmail.addEventListener("click" , exchangeDesktopMenu);
BurgerStyleMenuBar.addEventListener("click" , exchangeMobileMenu);
CartMenu.addEventListener("click" , exchangeCartAside);


function exchangeDesktopMenu (){
    const IsAsideClosed = Aside.classList.contains ("inactive");

    if (!IsAsideClosed){
        Aside.classList.add("inactive");
    }
    DesktopMenu.classList.toggle("inactive");
}

function exchangeMobileMenu (){
    const IsAsideClosed = Aside.classList.contains ("inactive");

    if (!IsAsideClosed){
        Aside.classList.add("inactive");
    }
    MobileMenu.classList.toggle("inactive");
}

function exchangeCartAside (){
    const IsMobileMenuClosed = MobileMenu.classList.contains ("inactive");

    if (!IsMobileMenuClosed ){
        MobileMenu.classList.add("inactive")
    }
    Aside.classList.toggle("inactive");
}